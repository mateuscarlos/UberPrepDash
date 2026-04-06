Com certeza. Vamos estruturar o seu **Guia de Aquecimento Diário** integrando a teoria dos professores brasileiros com a prática dos problemas do seu planejamento. Para manter o foco, organizei a **Semana 1** detalhadamente por dia.

Como regra geral para o seu plano, use o **Prof. André Backes** para a base estrutural (como os dados são organizados na memória) e o **Hallison Paz (Programação Dinâmica)** ou **Otávio Miranda** para a lógica aplicada em Python.

---

## 📅 Semana 1: Arrays, Hashing & Sliding Window

### Segunda - Hashing & Frequências
* **Aquecimento Teórico:** Assistir "Tabela Hash: Conceitos" do Prof. André Backes para entender colisões e por que o acesso é $O(1)$.
* **Lógica em Python:** Ver "Dicionários em Python" do Otávio Miranda para revisar a sintaxe de manipulação de chaves.
* **Problemas (#1, #242, #49, #26):** O foco aqui é o uso do `dict` para contar frequências.
* **Referência Extra:** Leia o capítulo de "Hashtable" no site do João Arthur Brunet para entender o fator de carga.

### Terça - Two Pointers
* **Aquecimento Teórico:** O Prof. André Backes não tem um vídeo específico chamado "Two Pointers", mas o conteúdo de "Ordenação" explica a base da técnica usada no Quicksort.
* **Lógica em Python:** Hallison Paz (Programação Dinâmica) explica a técnica de ponteiros em vídeos de "Busca e Ordenação".
* **Problemas (#11, #15, #42):** Foque em como os ponteiros `left` e `right` convergem para o centro.
* **Dica Uber:** Para o #42 (Trapping Rain Water), desenhe os ponteiros no papel antes de codar; é um clássico de "lógica de borda".

### Quarta - Sliding Window (Básico)
* **Aquecimento Teórico:** João Arthur Brunet (UFCG) tem exemplos de sub-arrays em seu material escrito que ilustram o conceito de janela.
* **Lógica em Python:** Busque no canal "Programação Dinâmica" por "Recursão e Iteração" para entender o controle de loops aninhados que serão otimizados pela janela.
* **Problemas (#3, #76, #904, #560):** O foco é o "template": expandir a direita e encolher a esquerda apenas quando necessário.

### Quinta - Sliding Window Avançado + Deque
* **Aquecimento Teórico:** Assistir "Filas Duplamente Encadeadas (Deque)" do Prof. André Backes.
* **Lógica em Python:** Ver como o Python implementa o `collections.deque` para garantir $O(1)$ em ambas as extremidades.
* **Problemas (#239, #567, #438, #128):** Use o Deque para manter a ordem monotônica no problema #239.

### Sexta - Arrays (Matrix e Simulação)
* **Aquecimento Teórico:** Assistir "Matrizes (Arrays Multidimensionais)" do Prof. André Backes para revisar indexação `[i][j]`.
* **Lógica em Python:** Otávio Miranda tem ótimos vídeos sobre "List Comprehension" e matrizes, que ajudam a escrever um código mais limpo na simulação.
* **Problemas (#36, #54, #53, #121, #122):** Foque na manipulação de índices para o Spiral Matrix (#54).

### Sábado - Revisão sem IDE
* **Aquecimento Mental:** Assista ao vídeo de "Complexidade de Algoritmos (Big O)" do Fabio Akita para ganhar vocabulário técnico.
* **Atividade:** Tente explicar os templates de Sliding Window e Two Pointers para uma "parede" ou grave-se falando, seguindo a dica da Attekita Dev.

Aqui está o detalhamento da **Semana 2**, focada em **Stack, Calculadoras e Busca Binária**, utilizando a tríade: **Professor (Conceito) -> Lógica Python (Implementação) -> Problema (Prática)**.

---

## 📅 Semana 2: Stack, Calculadoras & Binary Search

### Segunda - Stack Fundamentos
* **Aquecimento Teórico (Prof. André Backes):** Assista ao vídeo de **"Pilha (Stack)"**. Ele explica o conceito LIFO (*Last In, First Out*) e como a pilha é gerenciada na memória.
* **Lógica em Python (Otávio Miranda):** Procure por vídeos sobre **"Listas como Pilhas"**. Ele demonstra como usar `append()` e `pop()` para simular o comportamento de uma pilha de forma eficiente em Python.
* **Problemas (#20, #155, #150, #739):** No problema #20 (Valid Parentheses), foque em como a pilha "lembra" o último caractere aberto para validar o fechamento.

### Terça - Calculadoras com Pilha
* **Aquecimento Teórico (João Arthur Brunet):** Leia a seção sobre **"Aplicações de Pilhas"** no material escrito. Ele detalha a conversão de expressões infixas para posfixas (RPN), que é a base para calculadoras.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Assista ao vídeo sobre **"Recursividade e Pilha de Execução"**. Isso ajuda a entender como calculadoras com parênteses (problema #224) funcionam como sub-problemas recursivos.
* **Problemas (#224, #227, #772, #22):** Para o #224 (Basic Calculator), o segredo é empilhar o resultado parcial e o sinal atual sempre que encontrar um parêntese de abertura `(`.

### Quarta - Binary Search Clássico
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Busca Binária: Teoria e Implementação"**. Fundamental para entender a pré-condição: o array **precisa** estar ordenado.
* **Lógica em Python (Hallison Paz):** Assista ao vídeo **"Busca Binária na Prática"**. Ele mostra visualmente como os ponteiros `low`, `mid` e `high` se movem para descartar metade do espaço de busca.
* **Problemas (#33, #34, #153, #162, #74):** No problema #33 (Rotated Array), a lógica brasileira foca em identificar qual metade da lista permanece ordenada após a rotação.

### Quinta - Binary Search on Answer + Design
* **Aquecimento Teórico (Fabio Akita):** Assista ao vídeo sobre **"Ciência da Computação e Algoritmos"**. Ele comenta sobre como reduzir problemas complexos a buscas eficientes, o que dá a intuição para "buscar a resposta" em um intervalo numérico.
* **Lógica em Python (Otávio Miranda):** Revise o uso do módulo **`random`** e **`bisect`** (ferramenta de Binary Search nativa do Python) para o problema #528.
* **Problemas (#528, #668, #1011, #380):** No #1011, você não busca em uma lista, mas sim no "intervalo de pesos possíveis", testando se cada peso é viável com busca binária.

### Sexta - Intervals
* **Aquecimento Teórico (João Arthur Brunet):** Procure por **"Ordenação de Objetos"**. Lidar com intervalos exige quase sempre ordenar pelo tempo de início (*start time*) antes de qualquer lógica.
* **Lógica em Python (Hallison Paz):** Veja vídeos sobre **"Manipulação de Listas de Tuplas"**. Essencial para problemas como #56 (Merge Intervals), onde você compara o fim do intervalo anterior com o início do atual.
* **Problemas (#56, #57, #986, #253, #759):** No problema #253 (Meeting Rooms II), use a dica de **Min-Heap** do dia anterior para controlar o horário de término das salas.

### Sábado - Mock Cronometrado (Simulação)
* **Mentalidade de Entrevista (Attekita Dev):** Assista ao vídeo sobre **"Como se comportar em entrevistas técnicas"**. Foque em como explicar sua linha de raciocínio enquanto resolve os problemas #33 e #56.
* **Atividade:** Resolva os problemas de revisão cronometrando 20-30 minutos para cada um, sem olhar a solução anterior.

---

Aqui está o detalhamento da **Semana 3**, focada em **Linked Lists (Listas Encadeadas)** e **Trees (Árvores)**. Esta semana é crítica para a Uber, pois introduz o **LRU Cache** e a **Serialização**, temas frequentes em entrevistas de sistemas.

---

## 📅 Semana 3: Linked List & Trees

### Segunda - Linked List Manipulação
* **Aquecimento Teórico (Prof. André Backes):** Assista ao vídeo **"Lista Encadeada Simples"**. É vital entender a diferença entre o valor do nó e o ponteiro `next`.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Assista **"Listas Ligadas em Python"**. Ele mostra como criar a classe `Node` e a classe `LinkedList`, o que é essencial para o LeetCode.
* **Problemas (#2, #21, #138, #146):** No #146 (LRU Cache), você usará uma **Lista Duplamente Encadeada**. O Prof. Backes tem um vídeo específico sobre isso que vale o aquecimento extra.

### Terça - Cache (LRU/LFU) + Serialização
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Tabelas Hash com Encadeamento"**. O LRU Cache é a união de um `dict` com uma `Doubly LinkedList`.
* **Lógica em Python (Otávio Miranda):** Procure por **"Dicionários Ordenados (OrderedDict)"**. Embora no LeetCode você deva implementar a lista na mão, entender como o Python mantém a ordem ajuda na intuição.
* **Problemas (#460, #297, #428):** Para o #297 (Serialize BT), pense na árvore como uma string separada por vírgulas, onde `null` representa a ausência de filhos.

### Quarta - Trees — DFS e LCA
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Árvores Binárias - Conceitos e Percursos"**. Foque em Pré-ordem, Em-ordem e Pós-ordem.
* **Lógica em Python (Hallison Paz):** Assista ao vídeo de **"Recursividade"**. Quase todos os problemas de árvore são resolvidos de forma mais elegante com funções recursivas.
* **Problemas (#236, #199, #102, #101):** No #236 (LCA), a lógica brasileira foca em: "se eu achei um nó à esquerda e outro à direita, eu sou o ancestral comum".



### Quinta - Trees — Caminhos e BST
* **Aquecimento Teórico (João Arthur Brunet):** Leia a seção sobre **"Binary Search Tree (BST)"**. Entenda a propriedade: `esquerda < raiz < direita`.
* **Lógica em Python (Otávio Miranda):** Revise o uso de **Stacks (Pilhas)** para transformar recursão em iteração, necessário para o **BST Iterator (#173)**.
* **Problemas (#124, #173, #230, #98):** O #124 é um desafio de "Post-order DFS" — você decide o caminho máximo de baixo para cima.

### Sexta - Tries (Árvores de Prefixos)
* **Aquecimento Teórico (Prof. André Backes):** Busque por **"Árvores Digitais ou Tries"**. Ele explica como cada nó armazena um caractere, formando palavras ao longo do caminho.
* **Lógica em Python (Hallison Paz):** Verifique como usar dicionários aninhados em Python para implementar uma Trie de forma rápida: `trie[char] = {}`.
* **Problemas (#208, #211, #212, #642):** O #642 (Autocomplete) é um dos favoritos da Uber; ele mistura Trie com uma Fila de Prioridade (Heap).

### Sábado - Revisão Trees + Design (Whiteboard)
* **Mentalidade de Engenharia (Fabio Akita):** Assista **"Não aprenda a programar, aprenda a pensar"**. Use este dia para desenhar as árvores e ponteiros no papel antes de tocar no teclado.
* **Atividade:** Refaça o **LRU Cache** e o **Serialize BT** sem consultar o código anterior. São os problemas que mais definem aprovações em nível SDE-2.

---
Esta é a **Semana 4**, o coração técnico da Uber. Como a empresa lida com rotas, motoristas e passageiros, os problemas de **Grafos** são os mais frequentes em suas entrevistas.

---

## 📅 Semana 4: Graphs — Núcleo Absoluto Uber

### Segunda - BFS/DFS em Grid (Matrizes)
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Grafos: Representação por Matriz de Adjacência"**. Entenda como os vizinhos são os índices `[i-1, j]`, `[i+1, j]`, etc.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Procure por vídeos de **"Busca em Largura (BFS) vs Profundidade (DFS)"**. Ele explica a intuição de "espalhar uma mancha" (BFS) ou "ir até o fim de um caminho" (DFS).
* **Problemas (#200, #130, #529, #286):** No #200 (Number of Islands), a técnica brasileira clássica é o "Flood Fill": ao achar terra, use DFS para "afundar" a ilha inteira e contar 1.



### Terça - BFS em Grafo Implícito
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Caminhos Curtos em Grafos Não Ponderados"**. Em grafos onde cada aresta vale 1, a BFS sempre garante o menor caminho.
* **Lógica em Python (Otávio Miranda):** Revise o uso de `collections.deque`. Para a Uber, performance em BFS é medida pela eficiência do `popleft()`.
* **Problemas (#127, #815, #773, #909):** O **#815 (Bus Routes)** é um dos mais importantes para a Uber. A "sacada" é tratar cada linha de ônibus como um nó no grafo, não cada parada individualmente.

### Quarta - Clone + Weighted Graphs (Grafo Ponderado)
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Grafos: Lista de Adjacência"**. É a forma mais comum de representar grafos dinâmicos em Python usando dicionários.
* **Lógica em Python (Hallison Paz):** Assista ao vídeo de **"Dicionários e Grafos"**. Entenda como mapear o nó original para sua cópia usando um hash map para evitar ciclos no **Clone Graph (#133)**.
* **Problemas (#133, #399, #427):** No #399 (Evaluate Division), o grafo é ponderado pelo valor da divisão; você busca o caminho multiplicando os pesos das arestas.

### Quinta - Topological Sort (Ordenação Topológica)
* **Aquecimento Teórico (Prof. André Backes):** Busque por **"Ordenação Topológica em Grafos"**. Entenda o conceito de "grau de entrada" (in-degree): você só processa um nó quando todos os seus pré-requisitos acabarem.
* **Lógica em Python (Fabio Akita):** Assista ao vídeo **"Gerenciamento de Dependências"**. Embora seja sobre software, a lógica de compilação de pacotes é exatamente o que o **Course Schedule (#207)** resolve.
* **Problemas (#207, #210, #332, #269):** O **#332 (Reconstruct Itinerary)** é o #2 da lista Uber. Ele exige o algoritmo de Hierholzer para encontrar um caminho Euleriano.



### Sexta - BFS Avançado (Multi-source)
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"BFS com Múltiplas Fontes"**. Em vez de começar de um nó, você coloca todos os pontos de partida na fila ao mesmo tempo.
* **Lógica em Python (Otávio Miranda):** Foque em manter um set de `visited` global para evitar reprocessamento de nós em matrizes grandes.
* **Problemas (#317, #490, #329):** O #317 (Shortest Distance from All Buildings) simula exatamente a lógica de encontrar o melhor ponto de encontro para vários usuários da Uber.

### Sábado - Revisão Intensiva (Foco Uber)
* **Mentalidade de Entrevista (Attekita Dev):** Assista ao vídeo sobre **"System Design e Algoritmos"**. Grafos são a ponte entre LeetCode e o design de sistemas reais da Uber.
* **Atividade:** Tente resolver o **Bus Routes (#815)** e o **Alien Dictionary (#269)** sem olhar nenhuma dica. Se conseguir esses dois, você está no nível top 5% dos candidatos.

---
A **Semana 5** marca a transição de estruturas de dados rígidas para algoritmos de exploração e otimização. O foco aqui é **Backtracking** (essencial para o Uber e para o CodeSignal) e **Heaps** (gerenciamento de prioridades).

---

## 📅 Semana 5: Heaps, Backtracking & Greedy

### Segunda - Heaps Fundamentos
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Fila de Prioridade (Heap)"**. Entenda a estrutura de árvore completa e como o "pai" é sempre menor/maior que os filhos.
* **Lógica em Python (Otávio Miranda):** Procure por vídeos sobre o módulo **`heapq`**. É crucial saber que o Python implementa apenas a **Min-Heap**. Para uma Max-Heap, você deve inverter os sinais dos números (ex: `heapq.heappush(h, -val)`).
* **Problemas (#295, #23, #347, #973, #621):** O **#295 (Median from Data Stream)** é um clássico absoluto: você usa duas Heaps (uma Max e uma Min) para manter o equilíbrio do meio da lista.



### Terça - Heaps — Design
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Heapsort e Complexidade de Heaps"**. Entenda por que inserir e remover é $O(\log n)$ e por que isso é melhor que ordenar a lista toda vez.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Revise o uso de **Tuplas em Heaps**. Em problemas como o #973, você coloca `(distancia, ponto)` na Heap para que ela ordene automaticamente pela distância.
* **Problemas (#253, #739, #451):** No #253 (Meeting Rooms II), a Heap armazena os horários de término das reuniões para liberar salas conforme o tempo passa.

### Quarta - Backtracking Core
* **Aquecimento Teórico (Prof. André Backes):** Busque por **"Recursividade e Backtracking"**. Entenda o conceito de "tentativa e erro" e a importância de **desfazer** uma escolha ao voltar na recursão.
* **Lógica em Python (Hallison Paz):** Assista ao vídeo sobre **"Permutações e Combinações"**. Ele ensina o template: *Escolha -> Explore -> Desfaça* (Choose, Explore, Unchoose).
* **Problemas (#46, #39, #17, #79, #22):** No #79 (Word Search), o Backtracking é usado para "caminhar" na matriz e marcar as letras já usadas como visitadas temporariamente.

### Quinta - Backtracking Avançado
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Poda (Pruning) em Backtracking"**. Aprenda a interromper caminhos que claramente não levarão à solução para economizar tempo de processamento.
* **Lógica em Python (Otávio Miranda):** Veja como passar o **Estado** na recursão (ex: passar um índice ou um set de visitados) sem criar cópias desnecessárias de listas, o que mataria sua performance.
* **Problemas (#291, #465, #131):** O **#465 (Optimal Account Balancing)** é um dos top 5 da Uber. Ele resolve o problema de "quem deve a quem" (tipo Splitwise) usando Backtracking para testar combinações de pagamentos.

### Sexta - Greedy (Ganancioso) + Math
* **Aquecimento Teórico (Fabio Akita):** Assista **"Algoritmos Gananciosos e Programação Dinâmica"**. Entenda a diferença: o Greedy faz a melhor escolha *no momento*, sem olhar para o futuro.
* **Lógica em Python (Hallison Paz):** Procure por vídeos de **"Otimização e Lógica"**. O segredo do Greedy é provar que a escolha local leva à solução global.
* **Problemas (#45, #122, #55, #149):** No #55 (Jump Game), você só precisa manter o registro do "ponto mais longe que consigo alcançar" conforme caminha pelo array.

### Sábado - Mock OA CodeSignal (Simulação)
* **Mentalidade de Prova (Attekita Dev):** Assista ao vídeo **"Dicas para o CodeSignal"**. Provas automatizadas valorizam a velocidade e a cobertura de casos de borda.
* **Atividade:** Resolva os 4 problemas de revisão do PDF em **70 minutos**. Não use o Google. Se travar no #815 (Bus Routes), lembre-se que ele é o divisor de águas para candidatos Uber.

---

A **Semana 6** é o divisor de águas. A **Programação Dinâmica (DP)** é o tema que a Uber utiliza para testar se o candidato consegue otimizar soluções de força bruta exaustivas para tempos de execução eficientes. O segredo é a **Memoização**.

---

## 📅 Semana 6: Dynamic Programming (DP)

### Segunda - 1D DP Clássicos
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Recursividade: Conceitos e Exemplos"**. Entenda a "Pilha de Execução", pois a DP nada mais é do que uma recursão que "lembra" o que já calculou.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Assista ao vídeo **"O que é Programação Dinâmica?"**. Ele usa o exemplo clássico de Fibonacci para mostrar a diferença entre o tempo exponencial e o linear.
* **Problemas (#70, #198, #139, #322, #300):** No **#322 (Coin Change)**, a lógica é: "para chegar ao valor $X$, eu olho para os resultados de $X - moeda_1$, $X - moeda_2$...".

### Terça - 1D DP — Strings
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Memoization vs Tabulation"**. Entenda a diferença entre o Top-Down (recursivo) e Bottom-Up (iterativo).
* **Lógica em Python (Otávio Miranda):** Procure por vídeos sobre o decorador **`@lru_cache`** do Python. Ele é o seu melhor amigo em entrevistas para implementar memoização instantaneamente.
* **Problemas (#5, #647, #91, #152):** No **#91 (Decode Ways)**, cuidado extremo com o caractere '0', que não pode ser decodificado sozinho e invalida sequências.



### Quarta - 2D DP — Strings
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Matrizes e Alocação Dinâmica"**. Em DP 2D, você quase sempre preencherá uma tabela (matriz) onde cada célula depende da vizinha.
* **Lógica em Python (Hallison Paz):** Assista ao vídeo sobre **"Edit Distance (Distância de Edição)"**. É a base teórica para entender como transformar uma string em outra, essencial para o problema #72.
* **Problemas (#97, #72, #416, #63):** O **#97 (Interleaving String)** é top 10 da Uber. Você deve verificar se a posição `i` da string 1 e `j` da string 2 podem formar a posição `i+j` da string 3.

### Quinta - 2D DP — Grid e Stocks
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Subestrutura Ótima"**. Entenda por que um problema de caminho em grade pode ser quebrado em decisões menores (ir para baixo ou para a direita).
* **Lógica em Python (Otávio Miranda):** Revise como inicializar matrizes em Python de forma segura: `dp = [[0] * n for _ in range(m)]` para evitar bugs de referência de memória.
* **Problemas (#221, #63, #123, #188):** Os problemas de **Stocks (III e IV)** introduzem o conceito de "Máquina de Estados" dentro da DP (comprar, vender ou esperar).

### Sexta - DP Hard (Foco Uber)
* **Aquecimento Teórico (Fabio Akita):** Assista ao vídeo **"A Magia da Programação Dinâmica"**. Ele dá o contexto de como esses algoritmos são usados em logística e roteamento real.
* **Lógica em Python (Hallison Paz):** Busque por vídeos de **"Recursão com Múltiplos Estados"**. Isso é necessário para o Cherry Pickup, onde você simula duas pessoas andando simultaneamente.
* **Problemas (#741, #329, #291):** O **#741 (Cherry Pickup)** é o #3 da lista Uber. A dica de ouro: em vez de ir e voltar, simule duas pessoas indo do início ao fim ao mesmo tempo para simplificar o estado da DP.



### Sábado - Revisão Whiteboard (Recorrência)
* **Mentalidade de Entrevista (Attekita Dev):** Assista ao vídeo sobre **"Como explicar algoritmos complexos"**. Em DP, o entrevistador quer ver se você consegue escrever a **equação de recorrência** antes de codar.
* **Atividade:** Escreva no papel a lógica do **Interleaving String (#97)**. Desenhe a tabela e mostre como os valores preenchem as dependências. Se você souber explicar a tabela, o código sai sozinho.

---
A **Semana 7** foca em **Strings Especiais e Simulação**, que a Uber utiliza para testar sua atenção a detalhes e capacidade de lidar com requisitos de negócios complexos (como formatação de texto e validadores). Aqui, o "truque" é que não há truque: é traduzir regras de negócio para código limpo.

---

## 📅 Semana 7: Strings Especiais & Simulação

### Segunda - Strings Simulação (Hard)
* **Aquecimento Teórico (Prof. André Backes):** Assista **"Processamento de Strings"**. Revise funções como `split`, `join` e manipulação de espaços, fundamentais para não se perder na lógica.
* **Lógica em Python (Otávio Miranda):** Procure por **"Manipulação de Strings Avançada"**. Ele explica como o Python trata strings como objetos imutáveis e como usar listas de caracteres para otimizar a performance.
* **Problemas (#68, #591, #227, #772):** O **#68 (Text Justification)** é um clássico de "limpeza de código". A dica brasileira é: trate a última linha como um caso especial e as outras com uma lógica de distribuição de espaços vazios.

### Terça - Design + Estruturas Especiais
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Dicionários de Frequência e Ordenação"**. Entenda como combinar um Hash Map com uma Heap para manter o "Top K" elementos, base do Autocomplete.
* **Lógica em Python (Hallison Paz - Programação Dinâmica):** Assista ao vídeo de **"Implementação de Cache"**. Ele dá a intuição de como mover elementos para a "frente" ou "trás" de uma estrutura baseada no uso.
* **Problemas (#460, #642, #528):** No **#642 (Design Search Autocomplete)**, a Uber quer ver se você consegue integrar uma `Trie` com uma `Priority Queue` para sugerir frases em tempo real.

### Quarta - Revisão Graphs Hard
* **Aquecimento Teórico (Prof. André Backes):** Reassista **"Grafos: Algoritmo de Hierholzer ou Caminho Euleriano"**. Essencial para o problema de itinerários.
* **Lógica em Python (Fabio Akita):** Assista **"Como Computadores Decidem Rotas"**. Dá uma visão macro de como a Uber processa milhões de trajetos simultâneos.
* **Problemas (#332, #269, #815):** No **#269 (Alien Dictionary)**, o segredo é construir o grafo comparando apenas a primeira letra diferente entre palavras adjacentes da lista.



### Quinta - Revisão DP Hard + Estados
* **Aquecimento Teórico (João Arthur Brunet):** Leia sobre **"Programação Dinâmica em Grades (Grid DP)"**. Foque em como os estados (ex: posição do robô) definem o tamanho da sua matriz `dp`.
* **Lógica em Python (Hallison Paz):** Busque por **"Problemas de Otimização Combinatória"**. Ajuda na intuição do #465, onde você tenta zerar balanços com o mínimo de transações.
* **Problemas (#741, #773, #465):** No **#773 (Sliding Puzzle)**, trate o tabuleiro como uma string para usá-lo como chave no seu dicionário de `visited` durante a BFS.

### Sexta - Gaps e Pontos Fracos
* **Aquecimento Teórico (Prof. André Backes):** Busque por **"Busca Binária em Respostas"**. Se o problema #4 (Median of Two Sorted Arrays) ainda for um mistério, este conceito de "dividir para conquistar" no espaço de valores é a chave.
* **Lógica em Python (Otávio Miranda):** Revise o uso de **`math.gcd`** ou lógica de frações para o problema #149 (Max Points on a Line), evitando erros de precisão de ponto flutuante.
* **Problemas (#4, #149, #329, #591):** O **#149** exige que você use o coeficiente angular (slope) como chave de um dicionário para contar pontos colineares.

### Sábado - Mock II — Onsite (Simulação Real)
* **Mentalidade de Entrevista (Attekita Dev):** Assista **"Simulado de Entrevista Técnica"**. O foco aqui é o "Whiteboard": explicar a lógica enquanto desenha, sem o auxílio do corretor de sintaxe da IDE.
* **Atividade:** Escolha dois problemas "Hard" da semana e resolva-os falando em voz alta. Se possível, grave-se e assista para ver se sua explicação foi clara ou se você "travou" em silêncio por muito tempo.

---
A **Semana 8** é a reta final. O objetivo não é mais aprender novos conceitos, mas sim refinar a **velocidade**, a **comunicação** e a resistência mental para o dia da entrevista (26/05).

---

## 📅 Semana 8: Simulados Finais & Ajuste Fino

### Segunda - Mock III CodeSignal (Velocidade)
* **Aquecimento Teórico (Attekita Dev):** Assista ao vídeo sobre **"Como gerenciar o tempo em testes online"**. Foque em como não "travar" em um problema difícil e garantir os pontos dos fáceis/médios primeiro.
* **Lógica em Python (Otávio Miranda):** Revise rapidamente o uso de **`collections.Counter`** e **`defaultdict`**. Em provas de velocidade, essas ferramentas economizam linhas de código e evitam erros de `KeyError`.
* **Problemas (#815, #97, #465, #591):** Simule o ambiente do CodeSignal: sem música, sem consultas e com cronômetro de 70 minutos para os 4 problemas.

### Terça - Os 5 "Cavalos de Batalha" (Pontos Fracos)
* **Aquecimento Teórico (Prof. André Backes):** Escolha o tema que você mais teve dificuldade (ex: Grafos ou DP) e assista novamente à aula base para garantir que não há buracos conceituais.
* **Lógica em Python (Hallison Paz):** Procure por vídeos de **"Refatoração de Código"**. O objetivo hoje é resolver os problemas mais difíceis do seu plano com um código mais limpo e legível.
* **Problemas (#741, #332, #224, #465, #591):** Estes são os problemas "Top Uber" que exigem implementações longas. O foco é precisão: passar em todos os casos de teste na primeira tentativa.

### Quarta - Mock IV — Narração Total (Comunicação)
* **Aquecimento Teórico (Attekita Dev):** Assista **"Soft Skills para Programadores"**. Na Uber, ser um "lobo solitário" que coda em silêncio é sinal vermelho. Você precisa vender sua solução enquanto a escreve.
* **Lógica em Python (Fabio Akita):** Assista ao vídeo **"A Arte de Debugar"**. Aprenda a "debugar" falando: "Estou vendo que meu ponteiro `left` não está avançando quando o caractere é repetido...".
* **Problemas (#815, #97, #295, #269):** Resolva-os como se estivesse em uma chamada de vídeo com o recrutador. Explique a complexidade $O(N)$ e o espaço $O(N)$ antes de começar a digitar.

### Quinta - Templates de Memória (Escrita "Cega")
* **Aquecimento Teórico (Prof. André Backes):** Revise mentalmente as estruturas: **BFS** (Fila), **DFS** (Pilha/Recursão), **Dijkstra** (Heap), **Trie** (Dicts), **Union Find**.
* **Lógica em Python (João Arthur Brunet):** Leia os resumos de **"Complexidade de Algoritmos"** uma última vez para ter os valores de cabeça (ex: Heap push é $\log N$).
* **Atividade de Templates:** Em um editor de texto simples (sem auto-completar), escreva do zero os templates de:
    1.  BFS em matriz.
    2.  Dijkstra/Heap.
    3.  Trie (Insert/Search).
    4.  DP 2D (inicialização e loops).

### Sexta - Aquecimento Leve & Mental
* **Aquecimento Teórico (Fabio Akita):** Assista **"A Síndrome do Impostor"**. Relaxe. Você seguiu um plano de 8 semanas que a maioria dos candidatos não tem disciplina para completar.
* **Lógica em Python (Hallison Paz):** Revise apenas funções úteis da biblioteca padrão: `heapq.heappush/pop`, `bisect_left`, `math.inf` e `@lru_cache`.
* **Problemas (#20, #242):** Resolva dois problemas "Easy" apenas para manter os dedos quentes. O objetivo é confiança, não exaustão.

### 26/05 - O Dia da Entrevista 🚀
* **Dica de Ouro:** 10 minutos antes, resolva um problema que você já conhece de cor (ex: Two Sum). Isso ativa o "modo resolução" do cérebro.
* **Durante a entrevista:** 1. Pergunte sobre edge cases (ex: "O array pode estar vazio?", "Números negativos?").
    2. Comunique a ideia bruta, depois a otimizada.
    3. Codifique com calma. Boa sorte!.

---

