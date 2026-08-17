// const arr= [-1,0,5,10,15,20,25,30,35,40,45,50];

function binarySearch(arr, k){
    let start = 0;
    let end = arr.length -1;
    
    while(start<=end){

        let mid = end - Math.floor((end-start)/2);

        if(arr[mid]==k){
            return mid;

        }else if(k<arr[mid]){
                end=mid-1;
            }else{
                start=mid+1;
            }
    }
        
    return -1;

    }




console.log(binarySearch([-1,0,5,10,15,20,25,30,35,40,45,50],35));