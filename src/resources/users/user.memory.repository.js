const data = [];

const getAll = async () => data;

const getById = async (id) => data.find((item) => item.id === id);

const addEntity = async (entity) => { 
  const { id, name, login, password } = entity;
  const len = data.push({ id, name, login, password });
  // console.log('Итоговый массив пользователей:',data);
  return data[len-1];
};

const updateById = async (id, entity) => {
  const index = data.findIndex((item) => item.id === id);
  // console.log(`Получены данные ${entity}`);
  // console.log(`Получен ID ${id} - найден элемент с индексом ${index}`);
  
  Object.keys(entity).forEach((key) => {
    // console.log(`Проверка наличия свойства ${key}:`);
    if(key in data[index]) { 
      data[index][key] = entity[key];
      // console.log(`свойство ${key} найдено - присвоено значение ${entity[key]}`);
    }
  });

  // console.log(`Обновленный объект ${data[index]}:`);
  
  return data[index];
};

const deleteById = async (id) => {
  const index = data.findIndex((item) => item.id === id);
  // console.log(`Получен ID ${id} - найден элемент с индексом ${index}`);
  if (index >= 0) data.splice(index, 1);
  // console.log(`Массив после удаления:`, data);
};

module.exports = { getAll, getById, addEntity, updateById, deleteById };
