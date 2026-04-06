// Warm-up guides extracted from referencias_diarias.md and guia_de_aquecimento.md
// Mapped by week number
const warmupGuides = {
  1: {
    title: "Arrays, Hashing & Sliding Window",
    videos: [
      { label: "Vetores e Matrizes", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=A_pXvD-n9yM" },
      { label: "Tabela Hash (Conceitos)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=vV99u9G9S_k" },
      { label: "Listas e Tuplas em Python", author: "Otávio Miranda", url: "https://www.youtube.com/watch?v=9_pA6X69Z04" },
    ],
    readings: [
      { label: "Tabela Hash e Colisões", author: "João Arthur Brunet", url: "https://joaoarthurbm.github.io/eda/posts/hashtable/" }
    ],
    dailyTips: {
      "Seg": "Assistir \"Tabela Hash: Conceitos\" do Prof. Backes. Revisar manipulação de dicionários Python.",
      "Ter": "Ordenação base Two Pointers. Ponteiros left e right convergindo ao centro.",
      "Qua": "João Arthur explica sub-arrays e janela. Template: expandir direita, encolher esquerda.",
      "Qui": "Assistir \"Filas Duplamente Encadeadas (Deque)\" do Backes. Deque monotônico no #239.",
      "Sex": "Assistir \"Matrizes (Arrays Multidimensionais)\" do Backes. Foco em indexação [i][j].",
      "Sáb": "Vídeo de Big O do Fabio Akita. Tente explicar templates de Sliding Window e Two Pointers."
    }
  },
  2: {
    title: "Stack, Calculadoras & Binary Search",
    videos: [
      { label: "Pilha (Stack)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=pAnS_XFf7i8" },
      { label: "Busca Binária Teoria", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=0h9V9pG2F08" },
      { label: "Como funciona a Busca Binária", author: "Hallison Paz", url: "https://www.youtube.com/watch?v=f252E_Lp8_A" },
    ],
    readings: [],
    dailyTips: {
      "Seg": "LIFO: append() e pop() para simular pilha. Foco no #20 Valid Parentheses.",
      "Ter": "Leia sobre Aplicações de Pilhas. Calculadoras com parênteses são sub-problemas recursivos.",
      "Qua": "Busca Binária: array PRECISA estar ordenado. Ponteiros low, mid, high.",
      "Qui": "Binary Search on Answer. Buscar a resposta num intervalo numérico.",
      "Sex": "Lidar com intervalos exige ordenar por start time. #253 usa Min-Heap.",
      "Sáb": "Mock cronometrado. 20-30min cada problema sem olhar solução anterior."
    }
  },
  3: {
    title: "Linked List & Trees",
    videos: [
      { label: "Lista Encadeada Simples", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=N_6r96A_t_0" },
      { label: "Árvore Binária de Busca (BST)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=f9mO_YvR-4k" },
      { label: "Árvores AVL (Balanceamento)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=W_9vO8lG9Sg" },
    ],
    readings: [
      { label: "Caminhamentos em Árvores (In-order, Pre-order)", author: "João Arthur Brunet", url: "https://joaoarthurbm.github.io/eda/posts/bst/" }
    ],
    dailyTips: {
      "Seg": "Diferença entre valor do nó e ponteiro next. LRU Cache = Dict + Doubly LinkedList.",
      "Ter": "LRU: dict + LinkedList. Para Serialize BT, pense na árvore como string com vírgulas.",
      "Qua": "Árvores: Pré-ordem, Em-ordem, Pós-ordem. Recursividade elegante.",
      "Qui": "BST: esquerda < raiz < direita. Stacks para transformar recursão em iteração.",
      "Sex": "Tries: cada nó armazena um caractere. Dicionários aninhados em Python.",
      "Sáb": "Refaça LRU Cache e Serialize BT sem consultar código anterior."
    }
  },
  4: {
    title: "Graphs — Núcleo Absoluto Uber",
    videos: [
      { label: "Grafo: Representação (Matriz vs Lista)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=v_8X8A9_Y7s" },
      { label: "Busca em Largura (BFS)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=Tf86E_0_R3I" },
      { label: "Busca em Profundidade (DFS)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=aG86Y9C9K5M" },
      { label: "Menor Caminho (Dijkstra)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=mD07r7V03zM" },
    ],
    readings: [],
    dailyTips: {
      "Seg": "BFS/DFS em Grid. Vizinhos são [i-1,j], [i+1,j], etc. Flood Fill para Number of Islands.",
      "Ter": "BFS em grafo não-ponderado garante menor caminho. #815 Bus Routes: tratar linhas como nós.",
      "Qua": "Grafos dinâmicos com dicionários. Clone Graph: hash map para evitar ciclos.",
      "Qui": "Ordenação Topológica: in-degree. #332 exige Hierholzer para caminho Euleriano.",
      "Sex": "BFS Multi-source: todos os pontos de partida na fila ao mesmo tempo.",
      "Sáb": "Resolva #815 Bus Routes e #269 Alien Dictionary sem dicas. Top 5% dos candidatos."
    }
  },
  5: {
    title: "Heaps, Backtracking & Greedy",
    videos: [
      { label: "Fila de Prioridade (Heap)", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=Tf_fV26uQy8" },
      { label: "Recursividade e a Pilha de Execução", author: "Hallison Paz", url: "https://www.youtube.com/watch?v=S0u6B0U1TzU" },
      { label: "Algoritmos de Ordenação (Heapsort)", author: "Otávio Miranda", url: "https://www.youtube.com/watch?v=L9vP3M-F578" },
    ],
    readings: [],
    dailyTips: {
      "Seg": "Python: Min-Heap via heapq. Para Max-Heap, inverter sinais. #295 usa duas Heaps.",
      "Ter": "Tuplas em Heaps: (distância, ponto). #253 Meeting Rooms II: heap de horários de término.",
      "Qua": "Backtracking: Escolha → Explore → Desfaça. #79 Word Search: marcar letras visitadas.",
      "Qui": "Poda (Pruning). #465 Optimal Account Balancing: top 5 Uber.",
      "Sex": "Greedy: melhor escolha no momento. #55 Jump Game: ponto mais longe alcançável.",
      "Sáb": "Mock OA CodeSignal: 70 minutos, 4 problemas, sem Google."
    }
  },
  6: {
    title: "Dynamic Programming (DP)",
    videos: [
      { label: "O que é Programação Dinâmica?", author: "Hallison Paz", url: "https://www.youtube.com/watch?v=6hD9Zf8XvYI" },
      { label: "Recursão vs Iteração", author: "Prof. André Backes", url: "https://www.youtube.com/watch?v=G6E_pB-9v4s" },
    ],
    readings: [],
    dailyTips: {
      "Seg": "DP = recursão que lembra. Fibonacci: exponencial → linear. #322 Coin Change é clássico.",
      "Ter": "Memoization vs Tabulation. @lru_cache é seu melhor amigo. #91 cuidado com '0'.",
      "Qua": "DP 2D: tabela onde cada célula depende da vizinha. #97 Interleaving String: top 10 Uber.",
      "Qui": "Grid DP: decisões ir pra baixo ou direita. Stocks III/IV: Máquina de Estados.",
      "Sex": "#741 Cherry Pickup: #3 da lista Uber. Simular duas pessoas indo simultaneamente.",
      "Sáb": "Escreva no papel a tabela do Interleaving String. Se souber explicar, o código sai sozinho."
    }
  },
  7: {
    title: "Strings Especiais & Simulação",
    videos: [],
    readings: [],
    dailyTips: {
      "Seg": "#68 Text Justification: última linha como caso especial. Distribuição de espaços.",
      "Ter": "Design + Trie + Priority Queue para #642 Autocomplete. Combinar Hash Map com Heap.",
      "Qua": "Grafos Hard: Hierholzer para itinerários. #269 primeira letra diferente entre adjacentes.",
      "Qui": "DP Hard + Estados. #773 Sliding Puzzle: tabuleiro como string para chave visited.",
      "Sex": "#4 Median of Two Sorted Arrays: dividir para conquistar no espaço de valores.",
      "Sáb": "Mock Onsite: 2 problemas Hard falando em voz alta. Grave-se e assista."
    }
  },
  8: {
    title: "Simulados Finais & Ajuste Fino",
    videos: [],
    readings: [],
    dailyTips: {
      "Seg": "Mock CodeSignal: sem música, sem consultas, 70min para 4 problemas.",
      "Ter": "Os 5 Cavalos de Batalha: #741, #332, #224, #465, #591. Precisão na primeira tentativa.",
      "Qua": "Narração Total: resolva como se estivesse em chamada de vídeo. Venda a solução.",
      "Qui": "Templates de memória: escreva BFS, Dijkstra, Trie, DP 2D do zero sem autocomplete.",
      "Sex": "Aquecimento leve: 2 Easy para confiança. Revise heapq, deque, Counter, @lru_cache.",
      "26/05": "O DIA! 1 Easy 10min antes. Pergunte edge cases. Comunique primeiro, codifique depois."
    }
  }
};

// Verified PT-BR YouTube links by LC number
const ptBrLinks = {
  "1":   "https://www.youtube.com/watch?v=w1728E_ucdU",    // Two Sum
  "3":   "https://www.youtube.com/watch?v=U7Pq3EhXL3g",    // Longest Substring
  "11":  "https://www.youtube.com/watch?v=gQkp9hA_QOg",    // Container With Most Water
  "20":  "https://www.youtube.com/watch?v=eGgZ52DquRo",    // Valid Parentheses
  "53":  "https://www.youtube.com/watch?v=5JOzEG8k57U",    // Maximum Subarray
  "79":  "https://www.youtube.com/watch?v=cPSk7HTnTkQ",    // Word Search
  "98":  "https://www.youtube.com/watch?v=1d4ZYXMkHpo",    // Validate BST
  "102": "https://www.youtube.com/watch?v=bUuVc7yimpA",    // Binary Tree Level Order
  "128": "https://www.youtube.com/watch?v=Oj6U1dj3Aqs",    // Longest Consecutive Seq
  "206": "https://www.youtube.com/watch?v=29BtbE6yamU",    // Reverse Linked List
  "235": "https://www.youtube.com/watch?v=IAsEJP7wHxw",    // LCA of BST
};

// Reference channels
const channels = [
  { name: "Prof. André Backes", handle: "@ProgramacaoDescomplicada", focus: "Teoria pura (C/Agnóstico)", search: "Programação Descomplicada" },
  { name: "Hallison Paz", handle: "@pgdinamica", focus: "Teoria + Prática Python", search: "Programação Dinâmica" },
  { name: "Otávio Miranda", handle: "@otaviomiranda", focus: "Lógica e Python", search: "Otávio Miranda algoritmos" },
  { name: "Attekita Dev", handle: "@AttekitaDev", focus: "Big Tech e Mentoria", search: "Attekita Dev entrevista" },
  { name: "Fabio Akita", handle: "@Akitando", focus: "Ciência da Computação", search: "Akitando" },
  { name: "NeetCode", handle: "@NeetCode", focus: "Resoluções em inglês (legendas PT)", search: "NeetCode" },
];

export { warmupGuides, ptBrLinks, channels };
