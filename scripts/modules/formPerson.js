import createElement from "./createElement.js";

const createFormPerson=(n)=>{
  const form=createElement('form',{className:'person'});
  const title=createElement('h2',{
    className:'person__title',
    textContent:`Пассажир #${n+1}`,
  });
  const fieldName=createElement('div',{
    className: 'field',
  });  
  const labelName=createElement('div',{
    className: 'field__label',
    for:`name${n}`, 
    textContent:'ФИО',       
  });
  const inputName=createElement('input',{
    className:'field__input',
    id:`name${n}`,
    name:'name',
    type:'text',
    placeholder:'Введите ваше ФИО',
    required:true,
  });
  fieldName.append(labelName, inputName);
  form.append(title,fieldName);
  return form;
};

const getFormPerson=(count)=>{
  console.log(count);
const forms=[];
if (count>6) count=6;
for (let i=0; i<count; i++){

forms.push(createFormPerson(i));
}
console.log(...forms);
return forms;
};





export default getFormPerson;