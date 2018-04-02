function takeANumber (katzDeliLine, name){
 katzDeliLine.push(name) 
  var k = katzDeliLine.length
  return (`Welcome, ${name}. You are number ${k} in line.`)
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 1){ 
  var name =  katzDeliLine.shift()
   
   return `Currently serving ${name}.`
  }
  else {
  return  "There is nobody waiting to be served!"}

}

function currentLine
