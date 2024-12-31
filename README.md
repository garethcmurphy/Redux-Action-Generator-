# Redux Action Generator 🚀📜  

**A boilerplate generator for Redux-based setups in TypeScript. This tool automates the creation of multiple Redux actions and related boilerplate using `sed` and shell scripts, saving time and reducing manual effort.**

---

## Features ✨  

- **Boilerplate Automation**: Quickly generate TypeScript actions, types, and reducers for Redux setups.  
- **Batch Action Creation**: Define multiple actions and dispatch logic in a single run.  
- **Shell Script Powered**: Uses `sed` and shell scripting for fast and flexible code generation.  
- **Customizable**: Modify templates to fit your project requirements.  

---

## Getting Started 🚀  

### Prerequisites 🛠️  

Ensure you have the following tools installed:  
- **Node.js** (for TypeScript development)  
- **Shell Environment** (e.g., Bash or Zsh)  
- **sed** (commonly pre-installed on Unix-based systems)  

Install the required Node.js dependencies:  
pip install typescript

---

### Installation  

1. Clone the repository:  
git clone https://github.com/your-username/redux-action-generator.git  
cd redux-action-generator  

2. Make the scripts executable:  
chmod +x generate-actions.sh  

---

## Usage 🔧  

### Step 1: Define Actions  
Create a plain text file (e.g., `actions.txt`) and list the action names, one per line:  

FETCH_USERS  
CREATE_USER  
DELETE_USER  

### Step 2: Run the Generator  
Run the script with your input file:  
./generate-actions.sh actions.txt  

### Step 3: View Generated Files  
The following files will be created in the `src/` directory:  
- `actionTypes.ts`  
- `actions.ts`  
- `reducer.ts`  

---

## Customization 🛠️  

Templates for the generated files are located in the `templates/` directory:  
- `actionTypes.template`: Defines the structure for action type constants.  
- `actions.template`: Template for action creators.  
- `reducer.template`: Template for reducer logic.  

You can edit these templates to adjust the output structure.

---

## File Structure 📂  

redux-action-generator/  
├── generate-actions.sh (Main shell script)  
├── templates/ (Template files for actions, reducers, etc.)  
├── src/ (Generated output files)  
├── README.md (Documentation)  

---

## Contributing 🤝  

We welcome contributions!  

1. Fork the repository.  
2. Create a feature branch:  
git checkout -b feature/your-feature  

3. Commit your changes:  
git commit -m "Add your feature"  

4. Push the branch:  
git push origin feature/your-feature  

5. Open a pull request for review.  

---

## License 📝  

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments 🌟  

- Redux for state management inspiration.  
- sed and shell scripting for simplifying repetitive tasks.  
- The open-source community for guidance and tools.  

**Happy coding with Redux!** 🎉✨
