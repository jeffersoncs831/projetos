function Enviarwhats(event){
      event.preventDefault()
      
      const nome= download.getElementById('nome').value;
      const mensagem= download.getElementById('mensagem').value;
      const telefone ='5585992691357'
      
      const texto = `ola!Me chamo ${nome}, ${mensagem}`
      const msgformatada = encodeURIComponent(texto)
      const url= `https://whatsa.me/${telefone}/?t=${msgformatada}`
      console.log(url)
      
      window.open(url, '_blank')
      
    }