import firestore from '@react-native-firebase/firestore';

interface ISchemaElement {
  schema: string,
  endpoint: string
}

export async function syncData() {

  console.log('sync data');

  const schema = [
    {
      schema: 'Product1',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'Product2',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'Product3',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'Product4',
      endpoint: 'getNewProducts'
    },
    {
      schema: 'Images',
      endpoint: 'getImages'
    },
  ];

  const promiseCollection: any = [];

  schema.forEach((el: ISchemaElement) => {
    promiseCollection.push(
      new Promise(async (resolve, reject) => {
        try {
          await makeRecursiveApiCall(el, 0);
          resolve(true);
        } catch (error) {
          console.log('DB Schema error:', el.schema, error);
          reject(error);
        }
      })
    )
  });

  return Promise.all(promiseCollection)
    .then(async (results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.log('All promises intruded');
    });

}

async function makeRecursiveApiCall(element: ISchemaElement, skipCount: number) {
  try {

    console.log('makeRecursiveApiCall', element.schema);

    const apiResponse = await apiHandler(element.endpoint, skipCount);
    console.log(element.schema, apiResponse.length);
    if (apiResponse && apiResponse.length > 0) {
      await addDataToDB(apiResponse, element, skipCount);
    }

  } catch (error) {
    console.log('Error in MakeRecursiveAPICall fn', element.schema, error);
  }
}

async function apiHandler(endpoint: string, skipCount: number) {
  try {
    const url = `https://daikintechhub-test-api.daikincomfort.com/api/v1/${endpoint}?skip=${skipCount}&lastmod=2000-05-09T22:07:33.000Z`;
    console.log('API URL', url);
    return fetch(url).then((d) =>
      d.json()
    );
  } catch (error) {
    console.log('apiHandler error', error, endpoint);
  }

}

async function addDataToDB(apiResponse: Array<any>, element: ISchemaElement, skipCount: number) {

  const batch = firestore().batch();

  apiResponse.forEach((responseItem) => {
    const docRef = firestore().collection(element.schema).doc(); // auto-generated ID
    batch.set(docRef, responseItem);
  });

  const _skipCount = skipCount === 0 || !skipCount ? 500 : skipCount + 500;

  try {
    await batch.commit();
    makeRecursiveApiCall(element, _skipCount);
    console.log('Bulk insert successful', element.schema);
  } catch (error) {
    console.error('Error in bulk insert:', error, element.schema);
  }
}