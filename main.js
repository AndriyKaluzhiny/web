function getSystemInfo() {
  return {
    platform: process.platform,
    arch: process.arch,
    version: process.version,
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
  };
}

function saveSystemInfoToLocalStorage() {
  const systemInfo = getSystemInfo();
  localStorage.setItem('systemInfo', JSON.stringify(systemInfo));

  document.getElementById('output').textContent = JSON.stringify(systemInfo, null, 2);
}

document.onload = function() {
  // Check if the browser supports localStorage
  if (typeof(Storage) !== "undefined") {
    saveSystemInfoToLocalStorage();
    console.log("System information saved to localStorage.");
  } else {
    console.error("Local storage is not supported by this browser.");
  }
}   