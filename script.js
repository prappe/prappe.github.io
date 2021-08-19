const debounce = (fn) => {
	let frame
	return (...args) => {
		if (frame)
			cancelAnimationFrame(frame)
		frame = requestAnimationFrame(() => {fn(...args)})
	}
}

const purple = "1f0f34"
const pink = "f30042"
const almostBlack = "111111"

const mix=(m,i,x)=>{let j=(d)=>{return d.toString(16)};let k=(h)=>{return parseInt(h,16)};x=(typeof(x)!=="undefined")?x:50;let c="#";for(let l=0;l<=5;l+=2){let r=k(m.substr(l,2)),s=k(i.substr(l, 2)),v=j(Math.floor(s+(r-s)*(x/100.0)));while(v.length<2){v="0"+v};c+=v};return c;}

const store = () => {
	document.documentElement.dataset.scroll = window.scrollY
	let bgnamecolor = mix(almostBlack, purple, window.scrollY / window.innerHeight * 222)
	document.getElementById('bg1').style.backgroundColor = bgnamecolor
	// document.getElementById("name").style["-webkit-text-stroke"] = "0.02em " + mix(pink, purple, window.scrollY / window.innerHeight * 222)
	document.getElementById("name").style["-webkit-text-stroke"] = "0.02em " + bgnamecolor
	// document.getElementById("name").style.color = bgnamecolor
}
document.addEventListener("scroll", debounce(store), {passive: true})
store()

const ghx = (a) => {
	document.getElementById("ghun").style.opacity = a
}

const dsx = (a) => {
	document.getElementById("dsun").style.opacity = a
}