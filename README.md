<<<<<<< HEAD
# Google Sheets Clone

This project is a web application that mimics the user interface and core functionalities of Google Sheets. It supports mathematical and data quality functions, data entry, and key UI interactions.

---

## **Objective**
Develop a web application that closely mimics the user interface and core functionalities of Google Sheets, with a focus on:
- Mathematical and data quality functions.
- Data entry and validation.
- Key UI interactions (e.g., drag-and-drop, cell formatting).

---

## **Features**

### **1. Spreadsheet Interface**
- **Mimic Google Sheets UI**: The application closely resembles Google Sheets, including the toolbar, formula bar, and cell structure.
- **Drag-and-Drop**: Rows and columns can be dragged and dropped to reorder them.
- **Cell Dependencies**: Formulas and functions accurately reflect cell dependencies and update dynamically when related cells change.
- **Basic Cell Formatting**: Supports bold and italic formatting.
- **Add/Delete/Resize Rows and Columns**: Users can dynamically add, delete, and resize rows and columns.

### **2. Mathematical Functions**
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values in a range.

### **3. Data Quality Functions**
- **TRIM**: Removes leading and trailing whitespace from a cell.
- **UPPER**: Converts the text in a cell to uppercase.
- **LOWER**: Converts the text in a cell to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
- **FIND AND REPLACE**: Allows users to find and replace specific text within a range of cells.

### **4. Data Entry and Validation**
- **Input Various Data Types**: Supports numbers, text, and dates.
- **Basic Data Validation**: Ensures numeric cells only contain numbers.

### **5. Advanced Features**
- **Drag-and-Drop**: Users can drag and drop rows and columns to reorder them.

---

## **Tech Stack**
- **Frontend**: React
- **Spreadsheet Grid**: Handsontable
- **Formula Parsing**: Custom parser using `math.js`
- **Styling**: CSS

---

## **Data Structures**
- **2D Array**: Used to store cell data (values and styles).
- **Dependency Graph**: Tracks cell dependencies for formula updates.
- **State Management**: React’s `useState` and `useEffect` hooks for managing grid data and styles.

---

## **How to Run**

### **Prerequisites**
- Node.js and npm installed on your machine.

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/google-sheets-clone.git
   cd google-sheets-clone
   Install dependencies: npm install
   Start the development server: npm start
   Open your browser and navigate to:http://localhost:3000
=======
# google_sheets_clone
>>>>>>> d18800057badc6b1fefcc1997a2781dbefd927e3
