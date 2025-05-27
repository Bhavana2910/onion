document.getElementById("myForm").addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form submission

      const date = document.getElementById("date").value;
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const address = document.getElementById("address").value;

      const data = {
        date: date,
        name: name,
        number: number,
        additionalInfo: address
      };

      const fileContent = JSON.stringify(data, null, 2); // formatted JSON
      const blob = new Blob([fileContent], { type: "application/json" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${name || "data"}.json`;
      link.click();
    });