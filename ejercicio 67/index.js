function capital(c,x,n){
    if(x<0){return false}

    let capital= c*math.pow ((1+(x/100)),n);
    return capital;
}