function selectionSort(arr){

      for(let round = 0; round< arr.length-1 ; round ++){
        let index = round;

        for(let j = round; j<arr.length; j++){
          if(arr[j]<  arr[index]){
            index = j;
          }
        }
        let temp = arr[round];
        arr[round] = arr[index];
        arr[index] = temp;
      }
   
      console.log(arr);
}

selectionSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
selectionSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
selectionSort([1,2,3,4,5,6]); 