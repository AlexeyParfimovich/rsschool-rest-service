const data = [
  {
    id: '1',
    name: 'Joрn Doe',
    login: 'JohnDoe',
    password: 'P@ssw0rd'
  },
  {
    id: '2',
    name: 'Jane Doe',
    login: 'JaneDoe',
    password: 'P@ssw0rd'
  },
  {
    id: '3',
    name: 'Baby Doe',
    login: 'BabyDoe',
    password: 'P@ssw0rd'
  },
];

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   data
;

const getById = async (id) => [data.find((item) => item.id === id)];

const createEntity = async (entity) => { 
  data.push(entity);
  console.log(data);
}

const updateById = async (entity) => {
  let item = data.find((obj) => obj.id === entity.id);
  
  ({ item } = entity);
  // data.push(entity);
  return item;
};

const deleteById = async (id) => 
  // TODO: mock implementation. should be replaced during task development
  // const _id = parseInt(id, 10);
   [data.find((item) => item.id === id)]
;

module.exports = { getAll, getById, createEntity, updateById, deleteById };
