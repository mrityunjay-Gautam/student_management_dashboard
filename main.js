let students = [
    { name: 'Alice', email: 'alice@example.com', course: 'React' },
    { name: 'Bob', email: 'bob@example.com', course: 'Java' },
  ];
  
  let loggedIn = false;
  
  function login() {
    loggedIn = true;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('add-student-form').style.display = 'block';
    alert("Login Successful (Mock)");
    renderStudents();
  }
  
  function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
  
    if (!name || !email || !course) {
      alert("All fields are required!");
      return;
    }
  
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email.");
      return;
    }
  
    students.push({ name, email, course });
    renderStudents();
    event.target.reset();
  }
  
  function filterStudents() {
    const filter = document.getElementById('filter').value;
    renderStudents(filter);
  }
  
  function renderStudents(filter = '') {
    const list = document.getElementById('student-list');
    list.innerHTML = '';
  
    const filtered = students.filter(student => {
      return filter === '' || student.course === filter;
    });
  
    if (filtered.length === 0) {
      list.innerHTML = '<li>No students found.</li>';
      return;
    }
  
    filtered.forEach(student => {
      const li = document.createElement('li');
      li.textContent = `${student.name} (${student.course}) - ${student.email}`;
      list.appendChild(li);
    });
  }
  