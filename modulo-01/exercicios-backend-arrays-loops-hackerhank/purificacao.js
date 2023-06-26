function solucao(stringCorrompida) {
	const specialCharecters = ['!','@','#','$','%','&','*','(',')']
  
  let stringClean = ''
  
  for(let stringCharacter of stringCorrompida) {
    let found = false
    
    for(let specialCharacter of specialCharecters) {
      if(stringCharacter === specialCharacter) {
        found = true
      }
    }

    if(!found) {
      stringClean += stringCharacter
    }
  }                        
  
  console.log(stringClean)
}

solucao('*Canis %lupus )familiaris')