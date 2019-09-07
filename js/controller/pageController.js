class pageElements{
    constructor(
        pageTitleLabel,
        itemMessageLabel,
        itemTitleTextBox,
        itemMessageTextBox,
        startButton,
        createButton,
        deleteButton,
        editButton,
        updateButton,
        detailButton,
        consoleMessageLabel
        ){
        this.pageTitleLabel = pageTitleLabel;
        this.itemMessageLabel = itemMessageLabel;
        this.itemTitleTextBox = itemTitleTextBox;
        this.itemMessageTextBox = itemMessageTextBox;
        this.startButton = startButton;
        this.createButton = createButton;
        this.deleteButton = deleteButton;
        this.editButton = editButton;
        this.updateButton = updateButton;
        this.detailButton = detailButton;
        this.consoleMessageLabel = consoleMessageLabel;
    }

}
//インスタンスを生成しておく。
let elements;
window.onload = () => {
    elements = new pageElements(
        document.getElementById("pageTitleLabel"),
        document.getElementById("itemTitleLabel"),
        document.getElementById("itemMessageLabel"),
        document.getElementById("startButton"),
        document.getElementById("createButton"),
        document.getElementById("deleteButton"),
        document.getElementById("editButton"),
        document.getElementById("updateButton"),
        document.getElementById("detailButton"),
        document.getElementById("consoleMessageLabel")
    );
    changeMainView(elements);
}


function changeMainView(elm) {
    document.getElementById("consoleMessageLabel").textContent = 'func: changeMainView!';
}
function changeListView() {
    document.getElementById("consoleMessageLabel").textContent = 'func: changeListView!';
}
function changeEditPostView() {
    document.getElementById("consoleMessageLabel").textContent = 'func: changeEditPostView!';
}
function changeDetailPostView(){
    document.getElementById("consoleMessageLabel").textContent = 'func: changeDetailPostView!';
}

