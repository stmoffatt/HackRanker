/* Create a list, seqList , of N empty sequences, where each sequence is indexed from 0 to N - 1. The elements within each of the N  sequences also use 0-indexing.
Create an integer, lastAnswer, and initialize it to 0.
The 2 types of queries that can be performed on your list of sequences (seqList) are described below:
1. Query: 1 x y
Find the sequence,seq , at index ((x + lastAnswer)%N) in seqList .
Append integer y to sequence seq.
2. Query: 2 x y
Find the sequence, seq , at index ((x + lastAnswer)%N)  in seqList .
Find the value of element y% size  in seq (where size is the size of seq) and assign it to lastAnswer .
Print the new value of lastAnswer  on a new line
Task 
Given N, Q, and Q queries, execute each query.

Input Format

The first line contains two space-separated integers, N (the number of sequences) and Q (the number of queries), respectively. 
Each of the Q subsequent lines contains a query in the format defined above. */





function dynamicArray(n, queries) {
    var value_array = Array(0);
    var return_array = Array(0);
    var arrayOfArray = Array(0);
    var lastAnswer = 0;
    for (var i = 0; i < n; i++) {
        arrayOfArray.push(new Array(0));
    }

    for (var a = 0; a < queries.length; a++) {
        value_array = arrayOfArray[(queries[a][1] ^ lastAnswer) % n]
        if (queries[a][0] == 1) {
            value_array.push(queries[a][2]);
        } else if (queries[a][0] == 2) {
            lastAnswer = value_array[queries[a][2] % value_array.length];
            return_array.push(lastAnswer);
        }

    }

    return return_array;

}
