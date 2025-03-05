const MockTableColumns = [
  "ID",
  "First Name",
  "Last Name",
  "Age",
  "Gender",
  "Email",
  "Phone",
  "Username",
  "Birth Date",
  "Blood Group",
  "Height",
  "Weight",
];

const MockTableData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    username: "johndoe",
    birthDate: "1994-05-10",
    bloodGroup: "O+",
    height: "180 cm",
    weight: "75 kg",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    gender: "Female",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    username: "janesmith",
    birthDate: "1996-08-15",
    bloodGroup: "A+",
    height: "165 cm",
    weight: "60 kg",
  },
];

const USER_TABLE_COLUMNS = [
  { id: "id", label: "ID" },
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "age", label: "Age" },
  { id: "gender", label: "Gender" },
  { id: "email", label: "Email" },
  { id: "username", label: "Username" },
  { id: "phone", label: "Phone" },
  { id: "bloodGroup", label: "Blood Group" },
  { id: "birthDate", label: "Birth Date" },
  { id: "height", label: "Height" },
  { id: "weight", label: "Weight" },
  { id: "eyeColor", label: "Eye Color" },
];

const PageOptionMockData = [5, 10, 20, 50];

export {
  MockTableColumns,
  MockTableData,
  PageOptionMockData,
  USER_TABLE_COLUMNS,
};
