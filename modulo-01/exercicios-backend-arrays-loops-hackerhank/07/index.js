function solucao(disparos) {
	let disparosNoAlvo = 0
  
  for(let disparo of disparos) {
    if(disparo >= 70) {
      disparosNoAlvo += 1
    }
  }

  if(disparosNoAlvo >= 3) {
    console.log(disparosNoAlvo)
  } else {
    console.log('ELIMINADO')
  }
}