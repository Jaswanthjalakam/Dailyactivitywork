function clown(){
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(":)")
		},2000)
	})
}

async function msg(){
	const msg = await clown()
	console.log("Message: ",msg)
}

msg()