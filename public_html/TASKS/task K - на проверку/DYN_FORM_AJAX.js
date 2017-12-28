
var formDef1=//массив из хэшей
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'}];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'}
];

let tree_of_array = (my_form) =>
{
for (let discharge_of_hash in my_form)// разложение массива по хэшам  
{
    console.log(`Ключ: ${discharge_of_hash} значение: ${my_form[discharge_of_hash]}`);
    let Elements = my_form[discharge_of_hash]; 
    
//    console.log('выделение отдельного хэша:');
//    console.log(Elements); //выделение отдельного хэша  
         Elements_key = Object.keys(Elements);
         Elements_key_length = Elements_key.length; //количество ключей хэша 
//    console.log(Elements_key);//вывод только ключей каждого хэша (label)
     
};
};

tree_of_array(formDef2);


let start = (my_form) => 
{  

   var Parent_element=document.getElementById('main'),//находим тэг(body) по id
       new_form=document.createElement('form');// создание формы
       new_form.action='http://fe.it-academy.by/TestForm.php'; 
   var blockElement=Parent_element.appendChild(new_form);//добавление формы в body   

for (let discharge_of_hash in my_form)

{let Elements = my_form[discharge_of_hash]; 
 Elements_key = Object.keys(Elements);
 Elements_key_length = Elements_key.length; //количество ключей хэша 
   
     for (let elements_of_DOM in Elements)
   {
// console.log(`ключ - ${elements_of_DOM}, значение - ${Elements[elements_of_DOM]}`); //вывод ключей со значениями      
 
   if (elements_of_DOM === 'label' && Elements_key_length > 2)
 {     
        var new_label=document.createElement(elements_of_DOM); //создает label без родителя
        var newTextElement=document.createTextNode(Elements[elements_of_DOM]); //создает текстовый элемент
        new_label.appendChild(newTextElement);// элементу без родака присваиваем дочерний элемент текст
        blockElement.appendChild(new_label); //элементу по id присваиваем дочерний элемент 
      
 }    
if (Elements[elements_of_DOM] === 'longtext')
{   
    var DYN_input=document.createElement('input');
        DYN_input.type = 'text';
        blockElement.appendChild(DYN_input);//создаем тег input(type text) 
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
} 
if (Elements[elements_of_DOM] === 'number')   
{
    var DYN_input=document.createElement('input');
        DYN_input.type = 'number';                 
        blockElement.appendChild(DYN_input);//создаем тег input(type number) html5
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
}; 
 if (Elements[elements_of_DOM] === 'shorttext')   
{
    var DYN_input=document.createElement('input');
        DYN_input.type = 'email';                 
        blockElement.appendChild(DYN_input);//создаем тег input(type email) html5
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
};     
                //нужно загнать в массив
 if (Elements[elements_of_DOM] === 'combo')   //выпадающий список
{
    var DYN_select=document.createElement('select');
        DYN_select.id = 'new_select'; 
        blockElement.appendChild(DYN_select);
             var Elements_select=document.getElementById('new_select');

             var new_option_1=document.createElement('option'); 
             var new_option_2=document.createElement('option'); 
             var new_option_3=document.createElement('option'); 

             var newTextElement_1=document.createTextNode('здоровье'); 
             var newTextElement_2=document.createTextNode('домашний уют'); 
             var newTextElement_3=document.createTextNode('бытовая техника'); 

             new_option_1.appendChild(newTextElement_1);
             new_option_2.appendChild(newTextElement_2);
             new_option_3.appendChild(newTextElement_3);

             Elements_select.appendChild(new_option_1); 
             Elements_select.appendChild(new_option_2); 
             Elements_select.appendChild(new_option_3); 

        blockElement.appendChild(document.createElement('br'));//переход на новую строку
}; 

 if (Elements[elements_of_DOM] === 'radio')   //переключатели
{
    var DYN_input_1=document.createElement('input');
        DYN_input_1.type = 'radio';
        DYN_input_1.name = 'payment';
    var DYN_input_2=document.createElement('input');
        DYN_input_2.type = 'radio';
        DYN_input_2.name = 'payment';
    var DYN_input_3=document.createElement('input');
        DYN_input_3.type = 'radio';
        DYN_input_3.name = 'payment';

    var textradio1 = document.createElement('span');
        textradio1.innerHTML ='бесплатное';
        blockElement.appendChild(textradio1);
        blockElement.appendChild(DYN_input_1);//создаем тег input(type 'radio')
        
    var textradio2 = document.createElement('span');
        textradio2.innerHTML ='платное';
        blockElement.appendChild(textradio2);              
        blockElement.appendChild(DYN_input_2);//создаем тег input(type 'radio')

    var textradio3 = document.createElement('span');
        textradio3.innerHTML ='VIP';
        blockElement.appendChild(textradio3);                     
        blockElement.appendChild(DYN_input_3);//создаем тег input(type 'radio')

        blockElement.appendChild(document.createElement('br'));//переход на новую строку
};
 if (Elements[elements_of_DOM] === 'check')   
{
    var DYN_input=document.createElement('input');
        DYN_input.type = 'checkbox';
        DYN_input.checked="checked";
        blockElement.appendChild(DYN_input);//создаем тег input(type 'check') html5
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
}; 
 
  if (Elements[elements_of_DOM] === 'memo')   
{       blockElement.appendChild(document.createElement('br'));//переход на новую строку
    var DYN_input=document.createElement('textarea');
        blockElement.appendChild(DYN_input);//создаем тег input(type 'check') html5
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
}; 

   if (elements_of_DOM === 'label' && Elements_key_length <= 2)   
{      
    var DYN_input=document.createElement('input');
        DYN_input.type = 'submit';
        DYN_input.value = Elements[elements_of_DOM];
        blockElement.appendChild(DYN_input);//создаем тег input(type 'check') html5
        blockElement.appendChild(document.createElement('br'));//переход на новую строку
}; 
         };

};

};

start(formDef1); 
start(formDef2); 


