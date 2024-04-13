document.addEventListener('DOMContentLoaded', function() {
    const addUserBtn = document.getElementById('addUserBtn');
    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

    loadUsersFromStorage();

    addUserBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;

        if (name && email && role) {
            const newRow = userTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            cell1.textContent = userTable.rows.length;
            cell2.textContent = name;
            cell3.textContent = email;
            cell4.textContent = role;

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded-full');
            editBtn.title = 'Edit';
            editBtn.addEventListener('click', function() {
                editUser(newRow);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded-full');
            deleteBtn.title = 'Delete';
            deleteBtn.addEventListener('click', function() {
                deleteUser(newRow);
                saveUsersToStorage();
            });

            cell5.appendChild(editBtn);
            cell5.appendChild(deleteBtn);

            saveUsersToStorage();

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('role').value = 'user';
        } else {
            alert('Please fill in all fields');
        }
    });

    function saveUsersToStorage() {
        const users = [];
        for (let i = 0; i < userTable.rows.length; i++) {
            const user = {
                id: userTable.rows[i].cells[0].textContent,
                name: userTable.rows[i].cells[1].textContent,
                email: userTable.rows[i].cells[2].textContent,
                role: userTable.rows[i].cells[3].textContent
            };
            users.push(user);
        }
        localStorage.setItem('users', JSON.stringify(users));
    }

    function loadUsersFromStorage() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => {
            const newRow = userTable.insertRow();
            newRow.insertCell(0).textContent = user.id;
            newRow.insertCell(1).textContent = user.name;
            newRow.insertCell(2).textContent = user.email;
            newRow.insertCell(3).textContent = user.role;

            const cell5 = newRow.insertCell(4);
            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.classList.add('bg-green-500', 'hover:bg-green-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded-full');
            editBtn.title = 'Edit';
            editBtn.addEventListener('click', function() {
                editUser(newRow);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded-full');
            deleteBtn.title = 'Delete';
            deleteBtn.addEventListener('click', function() {
                deleteUser(newRow);
                saveUsersToStorage();
            });

            cell5.appendChild(editBtn);
            cell5.appendChild(deleteBtn);
        });
    }

    function deleteUser(row) {
        row.parentNode.removeChild(row);
    }    

    function editUser(row) {
        const name = prompt('Enter new name:', row.cells[1].textContent);
        const email = prompt('Enter new email:', row.cells[2].textContent);

        if (name !== null && email !== null) {
            row.cells[1].textContent = name;
            row.cells[2].textContent = email;
            saveUsersToStorage(); 
        }
    }
});
