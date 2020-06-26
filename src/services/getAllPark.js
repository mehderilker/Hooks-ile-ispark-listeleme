import api from './api';
let parkList = [];

export const getAllPark = async () => {
    await api.get().then(function (response ) {parkList = response.data.result.records})
        .catch((error) => {
            console.log("Hata : ",error)
        });
    return parkList
};
