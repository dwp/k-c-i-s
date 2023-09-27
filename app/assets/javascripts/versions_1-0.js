
  // get the last part of url - version/filename 
  var thisUrl = document.URL;
  var thisPagename = thisUrl.substring(thisUrl.lastIndexOf('/')+1);
  var thisPageAndLastPath = thisUrl.replace(('/' + thisPagename),'');
  var thisLastPath = thisPageAndLastPath.substring(thisPageAndLastPath.lastIndexOf('/')+1);
  var thisDocIdentifier = thisLastPath + '/' + thisPagename;
  if (thisDocIdentifier.slice(-1) == "#"){
    thisDocIdentifier = thisDocIdentifier.substring(0, thisDocIdentifier.length - 1)
  }

function highlightCurrentPage() {
  // get the versions link divs 
  var elements = document.getElementsByClassName('govuk-pagination__list');
  var pageItem = elements[0].querySelectorAll(".govuk-pagination__item");
  var aTag = pageItem[0].getElementsByTagName("a");
  var myHref = aTag[0].getAttribute("href");
  var docName = myHref.substring(myHref.lastIndexOf('/')+1);
  // loop through the version link divs
  pageItem.forEach(function (item, index) {
    var aTag = item.getElementsByTagName("a");
    var myHref = aTag[0].getAttribute("href");
    var docName1 = myHref.substring(myHref.lastIndexOf('/')+1);
    var thisPageAndLastPath1 = myHref.replace(('/' + docName1),'');
    var thisLastPath1 = thisPageAndLastPath1.substring(thisPageAndLastPath1.lastIndexOf('/')+1);
    var thisDocIdentifier1 = thisLastPath1 + '/' + docName1;
    console.log(thisDocIdentifier, thisDocIdentifier1);
    // highlight current page link
    if (thisDocIdentifier == thisDocIdentifier1){
        item.style.backgroundColor = "#1d70b8";
        item.getElementsByTagName("a")[0].style.color = "white";
        item.getElementsByTagName("a")[0].style.fontWeight = "700";
        // create previous and next links
        if (index == (pageItem.length-1)){ 
          document.getElementsByClassName('govuk-pagination__next')[0].style.display = "none";
        } else {   
          var NextDiv = document.getElementsByClassName('govuk-pagination__next');
          var NextLink = NextDiv[0].getElementsByTagName("a");
          document.getElementsByClassName('govuk-pagination__next')[0].getElementsByTagName('a')[0].setAttribute("href", pageItem[(index+1)].getElementsByTagName("a")[0]);
         };
        if (index == 0){
          document.getElementsByClassName('govuk-pagination__prev')[0].style.display = "none";
        } else {   
          var PrevDiv = document.getElementsByClassName('govuk-pagination__prev');
          var PrevLink = PrevDiv[0].getElementsByTagName("a");
          document.getElementsByClassName('govuk-pagination__prev')[0].getElementsByTagName('a')[0].setAttribute("href", pageItem[(index-1)].getElementsByTagName("a")[0]);
        }        
    }
  })
}
Window.onload = highlightCurrentPage( );
