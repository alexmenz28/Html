const materiales = [
    { name: "Ladrillo", type: "Material de construcción", quantity: 100, pricePerUnit: 2.5 },
    { name: "Cemento", type: "Material de construcción", quantity: 50, pricePerUnit: 10 },
    { name: "Arena", type: "Material de construcción", quantity: 1000, pricePerUnit: 0.5 },
    { name: "Madera", type: "Material de construcción", quantity: 500, pricePerUnit: 15 },
  ];
  
  function totalCostos(materiales) {
    let totalCost = 0;
    for (let i = 0; i < materiales.length; i++) {
      totalCost += materiales[i].quantity * materiales[i].pricePerUnit;
    }
    return totalCost;
  }
  
  function mostrarMateriales(materiales) {
    console.log("Materiales:");
    for (let i = 0; i < materiales.length; i++) {
      console.log(`
      Nombre: ${materiales[i].name}
      Tipo: ${materiales[i].type}
      Cantidad: ${materiales[i].quantity}
      Precio por unidad: ${materiales[i].pricePerUnit}
      `);
    }
  }
  
  const totalCost = totalCostos(materiales);
  
  mostrarMateriales(materiales);
  console.log(`Costo total: ${totalCost}`);