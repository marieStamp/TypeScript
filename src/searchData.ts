export interface SearchFormData {
    checkInDate?: string,
    checkOutDate?: string,
    price?: string
  }
  
const searchAction = (dataForSearch: SearchFormData) => {
  console.log('Check-in: ', dataForSearch.checkInDate);
  console.log('Check-out: ', dataForSearch.checkOutDate);
  console.log('Max price: ', dataForSearch.price);
}
  
export const searchHandler = () => {
  const searchForm = document.getElementById('hotel-search');
  
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkInDate = document.getElementById('check-in-date') as HTMLInputElement;
    const checkOutDate = document.getElementById('check-out-date') as HTMLInputElement;
    const price = document.getElementById('max-price') as HTMLInputElement;
  
    const dataForSearch: SearchFormData = {
      checkInDate: checkInDate.value,
      checkOutDate: checkOutDate.value,
      price: price.value
    };     
    searchAction(dataForSearch);
  });
};
