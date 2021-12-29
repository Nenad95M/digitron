function calculation(forma ,operator){
    const x=document.forma.broj1.valueAsNumber;
    const y=document.forma.broj2.valueAsNumber;
    if (operator=='+'){
        forma.rezultat.value=x+y;
    }

    else if (operator=='-'){
        forma.rezultat.value=x-y;
    }
    else if  (operator=='*'){
       forma.rezultat.value=x*y;
    }
    else if  (operator=='/'){
       forma.rezultat.value=(x/y).toFixed(2);
    }
}
