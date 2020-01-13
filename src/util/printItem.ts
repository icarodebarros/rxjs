export class PrintIntem {
    // Print the data on a html table
    static print(val:any) {
        console.log(val);
        var node = document.createElement("li");
        var textnode = document.createTextNode(val);
        node.appendChild(textnode);
        document.getElementById("output").appendChild(node);
    }
}