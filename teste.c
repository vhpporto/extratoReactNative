int main(){
   int vec[tamanho]; //Criando variável vetor
   int i, j;  //Criando variáveis de índices
//Estrutura de repetição para realizar a troca(ordenação)
   for (i = 0; i < tamanho -1; i++){    // Laço de repetição para primeiro índice
       for (j = i+1; j < tamanho; j++){    //Laço de repetição para segundo índice
	     if (vec[i] > vec[j]){    //Comparação entres os ponteiros
	         troca(&vec[i], &vec[j]); //Chama a função troca enviando o endereço do primeiro e segundo índice
	     }                    
        }   
   }    
   return(0);
}