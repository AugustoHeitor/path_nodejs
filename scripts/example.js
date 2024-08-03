const path = require('path');

// Serve para obter o nome do arquivo a partir de um caminho completo. Ele foi criado para facilitar a extração dessa última parte do caminho, que é o nome do arquivo. 

const filePath = 'C:\\temp\\myfile.html';
const baseName = path.basename(filePath);

// Para obter resultados consistentes ao trabalhar com caminhos de arquivo do Windows em qualquer sistema operacional, use path.win32.

path.win32.basename('C:\\temp\\myfile.html');

// Para obter resultados consistentes ao trabalhar com caminhos de arquivo POSIX em qualquer sistema operacional. 

path.posix.basename('/tmp/myfile.html');

// Retorna o nome do arquivo sem a extensão do arquivo.

path.basename('/foo/bar/baz/asdf/quux.html', '.html');

// É uma propriedade que fornece o caractere usado para separar várias entradas em variáveis de ambiente relacionadas ao caminho (como PATH). Esse delimitador varia entre sistemas operacionais:

// Ele foi criado para que você possa construir e analisar variáveis de ambiente de caminho de maneira correta e independente do sistema operacional.

console.log(path.delimiter);

// É usado para obter o diretório pai de um caminho de arquivo. 

const filePath = 'C:\\temp\\myfile.html';
const dirName = path.dirname(filePath);

console.log(dirName); // Saída: 'C:\\temp'

// É usado para obter a extensão do arquivo a partir de um caminho.

const filePath = 'C:\\temp\\myfile.html';
const extName = path.extname(filePath);

console.log(extName); // Saída: '.html'

// É usado para criar uma string de caminho (path) a partir de um objeto de caminho.

// É um método que pega um objeto contendo partes de um caminho e o converte em uma string de caminho.

const pathObject = {
    dir: '/home/augusto/documents',
    base: 'file.txt'
};

const fullPath = path.format(pathObject);

console.log(fullPath); // Output: /home/augusto/documents/file.txt

// Ele verifica se um caminho de arquivo ou diretório corresponde a um padrão especificado usando globs. Globs são padrões que permitem especificar conjuntos de arquivos com caracteres coringa, como * para qualquer sequência de caracteres.

// Primeiro parametro é o caminho que deseja verificar se corresponde ao padrão.

// Segundo parametro é o caminho que vc define como padrão.
path.matchesGlob(path, pattern)

// path.isAbsolute é um método que verifica se o caminho fornecido é absoluto.

path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false 

// É usado para unir uma sequência de segmentos de caminho em um único caminho normalizado.

// é um método que pega múltiplos segmentos de caminho e os junta em um único caminho contínuo.

// Unir vários segmentos de caminho
const caminho1 = path.join('/home', 'user', 'documentos');
console.log(caminho1); // Output: /home/user/documentos

// Unir com segmentos relativos
const caminho2 = path.join('/home', 'user', '..', 'outro_user', 'documentos');
console.log(caminho2); // Output: /home/outro_user/documentos

// Lidar com barras redundantes
const caminho3 = path.join('/home/', '/user/', 'documentos/');
console.log(caminho3); // Output: /home/user/documentos

// É usado para analisar um caminho de arquivo e retornar um objeto com suas várias partes.

const caminho = '/home/user/documentos/arquivo.txt';

const parsedPath = path.parse(caminho);

console.log(parsedPath);
/*
Output:
{
  root: '/',
  dir: '/home/user/documentos',
  base: 'arquivo.txt',
  name: 'arquivo',
  ext: '.txt'
}
*/

// É usado para calcular o caminho relativo entre dois caminhos absolutos.

// Ele retorna uma string que representa o caminho relativo necessário para navegar do caminho from até o caminho to.

const from = '/home/user/docs';
const to = '/home/user/docs/project/file.txt';

const relativePath = path.relative(from, to);
console.log(relativePath); // Output: project/file.txt

const from2 = '/home/user/docs';
const to2 = '/home/user/images/photo.jpg';

const relativePath2 = path.relative(from2, to2);
console.log(relativePath2); // Output: ../images/photo.jpg

// Ele processa os caminhos fornecidos da direita para a esquerda, concatenando-os até formar um caminho absoluto. Se nenhum dos caminhos fornecidos for absoluto, ele resolve o caminho resultante em relação ao diretório atual de trabalho. Durante o processo, ele normaliza o caminho final, removendo segmentos como . (diretório atual) e .. (diretório pai).

// Resolvendo vários segmentos relativos
const caminho1 = path.resolve('foo', 'bar', 'baz');
console.log(caminho1); // Output: /caminho/absoluto/para/diretório/atual/foo/bar/baz

// Resolvendo com um caminho absoluto
const caminho2 = path.resolve('/foo', 'bar', 'baz');
console.log(caminho2); // Output: /foo/bar/baz

// Segmentos com '..' e '.'
const caminho3 = path.resolve('/foo', 'bar', '../baz', './qux');
console.log(caminho3); // Output: /foo/baz/qux

// Caminhos mistos
const caminho4 = path.resolve('foo', '/bar', 'baz');
console.log(caminho4); // Output: /bar/baz

// Ele fornece uma maneira de obter o separador de caminho correto para o sistema operacional em que o Node.js está sendo executado. Em sistemas UNIX (como Linux e macOS), o separador de caminho é /, enquanto em sistemas Windows, é \\.

// Foi criado para permitir que os desenvolvedores manipulem caminhos de arquivos de forma portátil, independentemente do sistema operacional subjacente, evitando problemas que poderiam surgir ao usar separadores de caminho específicos de um sistema operacional em outro.

// Obter o separador de caminho do sistema operacional
console.log(path.sep); // Output: '/' em UNIX, '\\' em Windows

// Construir um caminho de forma portátil
const caminho = ['home', 'user', 'docs'].join(path.sep);
console.log(caminho); // Output: 'home/user/docs' em UNIX, 'home\\user\\docs' em Windows

// Dividir um caminho em segmentos usando o separador correto
const caminhoDividido = '/home/user/docs'.split(path.sep);
console.log(caminhoDividido); // Output: [ '', 'home', 'user', 'docs' ] em UNIX, [ '', 'home', 'user', 'docs' ] em Windows (com a string ajustada para usar '\\')


// É um método que converte um caminho em um formato "namespaced" para ser usado em sistemas de arquivos do Windows, especificamente em contextos onde você precisa lidar com caminhos UNC (Uniform Naming Convention) ou caminhos de dispositivos.

// Ele transforma um caminho normal em um caminho que pode ser usado para acessar recursos de rede ou dispositivos no Windows. O formato namespaced é necessário para acessar arquivos e diretórios que não estão localizados no sistema de arquivos tradicional, como caminhos de rede.

// você utilizaria path.toNamespacedPath quando precisar garantir que um caminho seja acessado corretamente em um contexto de rede ou dispositivo no Windows, especialmente quando trabalhando com recursos que requerem um caminho UNC ou um caminho de dispositivo.

const path = require('path');

// Caminho de exemplo
const caminho = 'C:\\Users\\user\\Documents';

// Converter para um caminho namespaced (no Windows)
const caminhoNamespaced = path.toNamespacedPath(caminho);

console.log(caminhoNamespaced);
// Output pode ser algo como '\\?\C:\Users\user\Documents' no Windows

// path.win32 é um objeto que contém métodos e propriedades do módulo path ajustados para o comportamento específico do sistema de arquivos do Windows. É equivalente ao módulo path padrão, mas com comportamentos e convenções específicos para Windows.

path.win32

// path.posix é um objeto que contém métodos e propriedades ajustados para o comportamento específico dos sistemas de arquivos que seguem o padrão POSIX, 

path.posix

// path.normalize(path) é um método que corrige e simplifica um caminho, ajustando-o para que esteja em um formato padrão e sem segmentos redundantes ou desnecessários.

// Foi criado para ajudar a manipular e validar caminhos de arquivos e diretórios de forma consistente. Ao normalizar caminhos, você evita problemas comuns com caminhos incorretos ou inesperados que podem surgir devido a caracteres redundantes ou errôneos.


// Caminho com redundâncias e segmentos desnecessários
const caminhoSujo = 'C:/Users/user/../user/Documents/./file.txt';

// Normalizar o caminho
const caminhoNormalizado = path.normalize(caminhoSujo);

console.log(caminhoNormalizado);
// Output pode ser algo como 'C:\Users\user\Documents\file.txt' no Windows, ou '/Users/user/Documents/file.txt' no UNIX

// Outro exemplo com barras duplicadas e redundantes
const caminhoComBarras = 'C:/Users//user/Documents///file.txt';

// Normalizar o caminho
const caminhoComBarrasNormalizado = path.normalize(caminhoComBarras);

console.log(caminhoComBarrasNormalizado);
// Output pode ser algo como 'C:\Users\user\Documents\file.txt' no Windows, ou '/Users/user/Documents/file.txt' no UNIX