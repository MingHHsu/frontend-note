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

  table.appendChild(tbody);

  /**@description: append table */
  root.appendChild(table);
}

async function fetchUsersData() {
  return [];
}

async function main() {
}

main();
