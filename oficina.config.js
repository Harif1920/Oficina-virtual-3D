// ============================================================
//  OFICINA VIRTUAL 3D · NODO BIM
//  Consultoría BIM/AEC: modelado, metrados, coordinación y automatización.
//  Los agentes, tareas y actividad son ILUSTRATIVOS (simulación de escaparate).
//  No incluye datos reales de clientes ni claves.
// ============================================================
window.OFICINA = {
  // Nombre que flota sobre el núcleo central y sale en la cabecera
  empresa: 'Nodo BIM',
  lema: 'Consultoría BIM y automatización',
  colorCentral: '#7c5ce6',

  // Recepción, en el centro (pon `recepcion: false` para quitarla)
  recepcion: {
    nombre: 'Recepción',
    tareas: ['Lee una consulta nueva y la pasa al equipo', 'Busca en internet: datos públicos del proyecto', 'Escribe la respuesta de bienvenida'],
  },

  // Cada departamento es un edificio (máximo 5). Cada agente tiene su propia oficina dentro.
  // Tipos de oficina: ventas, captacion, atencion, contenido, investigacion, desarrollo, entrega, finanzas,
  // direccion, pizarra, servidores, seguridad, laboratorio, comunidad, academia, analitica, formacion.
  // Las tareas que empiezan por «Busca en internet» o «Lee» cambian el holograma que flota sobre el agente.
  departamentos: [
    {
      id: 'comercial',
      nombre: 'Comercial',
      color: '#4a7fe0',
      zona: 'Comercial',
      responsable: { nombre: 'Responsable comercial', tareas: ['Reparte las oportunidades del día', 'Revisa las propuestas del equipo', 'Lee el resumen de la semana'] },
      agentes: [
        { id: 'comercial-1', nombre: 'Agente de captación', puesto: 'Captación', oficina: 'captacion',
          tareas: ['Busca en internet: constructoras con obras en licitación', 'Escribe el primer mensaje de contacto', 'Lee las respuestas recibidas'] },
        { id: 'comercial-2', nombre: 'Agente de propuestas', puesto: 'Propuestas', oficina: 'ventas',
          tareas: ['Lee el alcance que pide el cliente', 'Escribe la propuesta de modelado BIM', 'Busca en internet: referencias de tarifas del sector'] },
      ],
    },
    {
      id: 'modelado',
      nombre: 'Modelado BIM',
      color: '#9b6cf0',
      zona: 'Modelado BIM',
      responsable: { nombre: 'BIM Manager', tareas: ['Revisa el plan de ejecución BIM', 'Asigna los modelos por disciplina', 'Lee el control de calidad del modelo'] },
      agentes: [
        { id: 'modelado-1', nombre: 'Agente de modelado', puesto: 'Modelado Revit', oficina: 'desarrollo',
          tareas: ['Lee los planos de arquitectura', 'Escribe la estructura de niveles y rejillas', 'Modela muros, losas y columnas'] },
        { id: 'modelado-2', nombre: 'Agente de familias', puesto: 'Familias paramétricas', oficina: 'laboratorio',
          tareas: ['Busca en internet: ficha técnica de un fabricante', 'Escribe los parámetros de la familia', 'Lee la guía de nomenclatura'] },
      ],
    },
    {
      id: 'metrados',
      nombre: 'Metrados',
      color: '#2fa58a',
      zona: 'Metrados',
      responsable: { nombre: 'Responsable de metrados', tareas: ['Revisa las cantidades del equipo', 'Lee la partida presupuestal', 'Valida el formato de entrega'] },
      agentes: [
        { id: 'metrados-1', nombre: 'Agente de cantidades IFC', puesto: 'Cantidades IFC', oficina: 'analitica',
          tareas: ['Lee el modelo IFC exportado', 'Escribe la tabla de metrados por partida', 'Busca en internet: norma de medición vigente'] },
      ],
    },
    {
      id: 'coordinacion',
      nombre: 'Coordinación',
      color: '#e0663f',
      zona: 'Coordinación',
      responsable: { nombre: 'Coordinador BIM', tareas: ['Prepara la reunión de coordinación', 'Revisa las interferencias críticas', 'Lee las respuestas a las RFI'] },
      agentes: [
        { id: 'coordinacion-1', nombre: 'Agente de interferencias', puesto: 'Detección de interferencias', oficina: 'pizarra', dibujo: 'diagrama',
          tareas: ['Lee los modelos federados', 'Escribe el informe de interferencias', 'Agrupa los choques por disciplina'] },
        { id: 'coordinacion-2', nombre: 'Agente de RFIs', puesto: 'Consultas (RFI)', oficina: 'atencion',
          tareas: ['Lee una duda del equipo de obra', 'Escribe la RFI al proyectista', 'Busca en internet: detalle constructivo de referencia'] },
      ],
    },
    {
      id: 'automatizacion',
      nombre: 'Automatización',
      color: '#d6a52b',
      zona: 'Automatización',
      responsable: { nombre: 'Responsable de automatización', tareas: ['Prioriza las tareas repetitivas a automatizar', 'Revisa los scripts del equipo', 'Lee las sugerencias de los modeladores'] },
      agentes: [
        { id: 'automatizacion-1', nombre: 'Agente pyRevit', puesto: 'Scripts pyRevit', oficina: 'servidores',
          tareas: ['Lee la API de Revit', 'Escribe un script de pyRevit', 'Busca en internet: ejemplo de la comunidad pyRevit'] },
      ],
    },
  ],
};
