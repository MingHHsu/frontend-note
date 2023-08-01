const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render(user) {
      const img = document.createElement('img');
      img.src = user.avatar;
      img.alt = 'avatar';
      return img;
    },
  },
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  }
];

function createUsersTable(usersData) {
  const root = document.getElementById('root');
  const table = document.createElement('table');
  table.style = 'border: 1px solid black;';
  
  /**@description: append header */
  const header = document.createElement('thead');
  const row = document.createElement('tr');
  columns.forEach((column) => {
    const cell = document.createElement('th');
    cell.style = 'border: 1px solid black;padding: 10px;';
    cell.textContent = column.title;
    row.appendChild(cell);
  });
  header.appendChild(row);
  table.appendChild(header);
  

  /**@description: append body */
  const tbody = document.createElement('tbody');
  usersData.data.forEach((user) => {
    console.log(user)
    const row = document.createElement('tr');
    columns.forEach((column) => {
      const cell = document.createElement('td');
      cell.style = 'border: 1px solid black;padding: 10px;';
      if (column.dataIndex === 'avatar') {
        const img = column.render(user);
        cell.appendChild(img);
      } else {
        cell.textContent = user[column.dataIndex];
      }
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  })

  table.appendChild(tbody);

  /**@description: append table */
  root.appendChild(table);
  return 
}

async function fetchUsersData() {
  try{
    const response =  await fetch('https://reqres.in/api/users');
    return await response.json();
  } catch (error) {
    console.log(error);
  }
  return [];
}

async function main() {
  const usersData = await fetchUsersData();
  createUsersTable(usersData);

}

main();
