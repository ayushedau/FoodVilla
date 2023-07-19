export function filterData(searchText,restraunts){
    return (
      restraunts.filter((restraunt)=>
        restraunt?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    );
  }