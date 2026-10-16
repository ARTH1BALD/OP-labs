
function ipToInt(ip) {
    const octets = ip.split('.').map(Number);
    
   return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;

}

console.log(ipToInt('192.168.1.1')); // Виведе числове представлення IPяФУ