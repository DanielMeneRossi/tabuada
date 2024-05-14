function tabuada() {
	var num = document.getElementById('numero')
	var res = document.getElementById('res')
	if (num.value.length == 0){
		window.alert('Digite um número')
	} else {
		var n = Number(num.value)
		var i = 0
		var t = n
		res.innerHTML = ''
		while (i <= 10) {
			n = t * i
			res.innerHTML += `${t} X ${i} = ${n}<br/>`
			i++
		}
	}
}