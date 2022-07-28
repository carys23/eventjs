






//////////////////////////////////////////////////







document.addEventListener('DOMContentLoaded', init, false);
   
function init(){
    // function message () {
    //   alert("Hello!");
    // }



    function download_csv_file() {
        var data = [

            {'name': 'ann', 'id': '007'}, {'name': 'ben', 'id': '62'}, {'name': 'sarah', 'id': '0d'},
            ] 
      
        csv1 =  'test'
        csv2 =  'test2'
    
        let csv =  [csv1, csv2 + '\n']
    
    
        name_1  = data[0]['name']
        id_1 = data[0]['id']
        
        name_2  = data[1]['name']
        id_2 = data[1]['id']
    
        data_1 = [name_1, id_1]
        data_2 = [name_2, id_2]
    
        let csvFileData = [data_1, data_2]
    
    
     // merge the data with CSV  
        csvFileData.forEach(function(row) {  
                csv += row.join(',');  
                csv += "\n";  
        });  
    
        // //display the created CSV data on the web browser   
        var d = document.createElement('div');
        d.append(csv);
        document.getElementsByTagName('body')[0].appendChild(d);
    
        var hiddenElement = document.createElement('a');  
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
        hiddenElement.target = '_blank';  
    
        //provide the name for the CSV file to be downloaded  
        hiddenElement.download = 'test.csv';  
        hiddenElement.click();  
    }  
    

    var button = document.getElementById('button2');
    button.addEventListener('click', download_csv_file, true);
  };

