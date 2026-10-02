document.getElementById('caseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';


    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        
        const conducta = document.getElementById('conducta').value;
        const antecedentes = document.getElementById('antecedentes').value;
        const evidencia = document.getElementById('evidencia').value;

        let calificacion = "";
        let riesgo = "";
        let estrategia = "";

        if (conducta === 'hurto') {
            calificacion = "Hurto Agravado y Calificado";
            riesgo = antecedentes === 'condena' ? "ALTO (Procedencia de medida privativa de libertad intramural)" : "MEDIO (Posible medida no privativa o caución)";
            estrategia = "Solicitar peritaje de avalúo comercial de los bienes. Si la evidencia es flagrancia, evaluar viabilidad de preacuerdo o principio de oportunidad.";
        } else if (conducta === 'estafa') {
            calificacion = "Estafa Agravada por la Cuantía";
            riesgo = "MEDIO / BAJO (Delito patrimonial, sujeto a reparación integral)";
            estrategia = "Priorizar búsqueda de trazabilidad bancaria y evidencia digital. Promover mecanismo alternativo de solución de conflictos (conciliación) para indemnización.";
        } else if (conducta === 'lesiones') {
            calificacion = "Lesiones Personales (Art. 111 C.P.)";
            riesgo = "MODERADO (Sujeto a los días de incapacidad médico-legal)";
            estrategia = "Solicitar ampliación o revisión del dictamen de medicina legal para precisar la incapacidad definitiva y verificar secuelas fijas o transitorias.";
        } else if (conducta === 'homicidio') {
            calificacion = "Conducta Contra la Vida / Homicidio";
            riesgo = "MUY ALTO (Medida de aseguramiento privativa de libertad imperativa)";
            estrategia = "Revisión rigurosa de cadena de custodia en prueba balística y forense. Evaluar concurrencia de causales de ausencia de responsabilidad (ej. legítima defensa).";
        }
        document.getElementById('resCalificacion').innerText = calificacion;
        document.getElementById('resRiesgo').innerText = riesgo;
        document.getElementById('resEstrategia').innerText = estrategia;

        
        document.getElementById('results').style.display = 'block';
    }, 800);
});
