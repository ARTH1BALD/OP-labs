#include <stdio.h>

int main (){
double x = 19;  
double matrix[7][7] = {
1,   8,   4,  12,   3,   6,  10,
3,   9,   2,  14,   7,  11,   5,
5,  13,   6,   4,  16,   8,   2,
7,   1,  17,   9,   6,  15,   3,
9,  11,   2,  18,   5,   4,  20,
11,  3,  19,   7,  21,   6,  12,
13, 15,  17,  19,  21,  23,  25,
};
int left = 0;
int right = 6;
int flag1= 0;
int flag2= 0;
while (left <= right){

int mid = (left + right)/2; 
if(matrix[6][mid] == x ){
    int row = 6;
    int column = mid;  
    printf("The number is found!! X = %f\n", x);
    printf("Coordinates: %d, %d\n", row+ 1 , column+ 1);
    flag1 = 1; 
    break;
}

else if (matrix[6][mid] < x ){
   left = mid + 1;

}

else if (matrix[6][mid] > x){
    right = mid - 1; 
}



}
if (flag1 == 0){
    printf("X is not found");
}

left = 0;
right = 6; 

while(left <= right){
int mid = (left + right)/2;
if(matrix[mid][0] == x ){
    int row = mid;
    int column = 0;  
    printf("The number is found!! X = %f\n", x);
     printf("Coordinates: %d, %d\n", row+ 1 , column+ 1);
    flag2 = 1;
    break;
}
else if (matrix[mid][0] < x ){
   left = mid + 1;

}

else if (matrix[mid][0] > x){
    right = mid - 1; 
}
 
}
if (flag2 == 0){
    printf("X is not found");
}

return 0;

}
