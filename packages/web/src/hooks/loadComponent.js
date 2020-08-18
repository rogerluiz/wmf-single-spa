function loadComponent(scope, module) {
  return async () => {
    // Inicializa o compartilahmento de scopo. Isso preenche com os módulos desse build e dos remotos
    await __webpack_init_sharing__("default");
    
    // Ou pega o container em outro lugar
    const container = window[scope];

    // Inicialize o container, pode fornecer módulos compartilhados
    await container.init(__webpack_share_scopes__.default);

    // Encontra o modulo dentro do scopo passado
    const factory = await window[scope].get(module);
    const Module = factory();

    return Module;
  };
}

export default loadComponent;
