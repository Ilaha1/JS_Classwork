async function getUsers() {
  const response = await fetch("https://northwind.vercel.app/api/categories");
  const data = await response.json();
  console.log(data);
}
getUsers();


let deleteById = async (id) => {
  try {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
  } catch (error) {
    console.log(error);
  }
};

deleteById(4);

