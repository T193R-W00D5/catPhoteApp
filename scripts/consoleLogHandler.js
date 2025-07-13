function getLegendsData() {
    var name = "Alan Turing"
    var birthYear = 1912;
    var accomplishments = [];
    accomplishments.push("Cryptanalysis");
    accomplishments.push("Computability and the Turing Test");

    /*var today = new Date();
    var age = today.getFullYear() - birthYear;

    console.log(name + " would be " + age + " years old in " + today.getFullYear());
    console.log("His accomplishments include:");
    for(var i = 0;i < accomplishments.length;i++) {
        console.log(" - " + accomplishments[i]);
    }*/

    var aCSLegend = {
        name: "Grace Hopper",
        birthYear: 1906,
        accomplishments: ["Compilers", "COBOL"]
    };

    var legends = [aCSLegend, {name: name, birthYear: birthYear, accomplishments: accomplishments}];

    var aModernCSLegend = {
        name: "Linus Torvalds",
        birthYear: 1969,
        accomplishments: ["Linux", "Git"]
    };
    legends.push(aModernCSLegend);

    return legends;
}

export function handleConsoleLogTest(showSnackbar) {
  const now = new Date().toLocaleString();
  showSnackbar('snackbar_console_log_test', `Console Log Test button clicked at:<br>${now}`);
  console.log(`Console Log Test button clicked at: ${now}`);
  console.log("Computer Science Legends:");
  const legends = getLegendsData();

  // Get the textarea
  const outputBox = document.getElementById('consoleOutput');
  let output = `Console Log Test button clicked at: ${now}\n`;
  output += "Computer Science Legends:\n";
  legends.forEach(legend => {
    output += `- ${legend.name} (Born: ${legend.birthYear})\n`;
    if (legend.birthYear >= 1950) {
        output += `  Modern Legend: Yes\n`;
    } else {
        output += `  Modern Legend: No\n`;
    }
    output += "  Accomplishments:\n";
    legend.accomplishments.forEach(accomplishment => {
      output += `  - ${accomplishment}\n`;
    });
  });

  // Print to textarea and console
  if (outputBox) {
    outputBox.value = output;
    outputBox.scrollTop = outputBox.scrollHeight; // Scroll to bottom
  }
  console.log(output);
}

//   legends.forEach(legend => {
//     console.log(`- ${legend.name} (Born: ${legend.birthYear})`);
//     console.log("  Accomplishments:");
//     legend.accomplishments.forEach(accomplishment => {
//       console.log(`  - ${accomplishment}`);
//     });
//   });
// }