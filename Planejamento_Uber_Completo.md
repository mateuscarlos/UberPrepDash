# Cronograma de Preparação Uber (8 Semanas)

## 📚 Material de Apoio Recomendado

**Fundamentos e Teoria (C/Agnóstico)**
- **Prof. André Backes** (@ProgramacaoDescomplicada): Mais de 140+ vídeos cobrindo estruturas de dados básicas (Hash, Árvores, Grafos, etc).
- **Prof. João Arthur Brunet**: Excelente material escrito em pt-br [joaoarthurbm.github.io/eda](https://joaoarthurbm.github.io/eda).

**Prática e Intuição Visual em Python**
- **Hallison Paz** (@pgdinamica): Ótimo pré-requisito visual antes da implementação em Python.
- **Otávio Miranda** (@otaviomiranda): Lógica e algoritmos em Python de forma acessível.

**Big Tech, Carreira e Dicas de Entrevista**
- **Attekita Dev** (@AttekitaDev): Como funciona processos em big techs e LeetCode.
- **Fabio Akita** (@Akitando): Base sólida e ciência da computação pura.

---

## Semana 1: Arrays, Hashing & Sliding Window
*Objetivo/Foco: Problemas #1, #3, #49, #128 — top da lista Uber*

### Seg - Hashing & frequências (Tempo estimado: 2h)
> **Nota:** Já concluídos do plano anterior: Two Sum, Valid Anagram, Group Anagrams. Revise as soluções em Python puro antes de avançar.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 1 | **Two Sum** | 🔴 Top Uber | [LC 1](https://leetcode.com/problems/two sum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Two%20Sum) / [PT-BR](https://www.youtube.com/watch?v=w1728E_ucdU) |
| 242 | **Valid Anagram** | 🔴 Top Uber | [LC 242](https://leetcode.com/problems/valid anagram/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Valid%20Anagram) |
| 49 | **Group Anagrams** | 🔴 Top Uber | [LC 49](https://leetcode.com/problems/group anagrams/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Group%20Anagrams) |
| 26 | **Remove Duplicates from Sorted Array** | 🔴 Top Uber | [LC 26](https://leetcode.com/problems/remove duplicates from sorted array/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Remove%20Duplicates%20from%20Sorted%20Array) |

### Ter - Two Pointers (Tempo estimado: 2.5h)
> **Nota:** 3Sum: ordenar, fixar, dois ponteiros. Cuidado com duplicatas. Container: ponteiros das extremidades.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 11 | **Container With Most Water** | 🔴 Top Uber | [LC 11](https://leetcode.com/problems/container with most water/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Container%20With%20Most%20Water) / [PT-BR](https://www.youtube.com/watch?v=gQkp9hA_QOg) |
| 15 | **3Sum** | 🔴 Top Uber | [LC 15](https://leetcode.com/problems/3sum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+3Sum) |
| 42 | **Trapping Rain Water** | 🔴 Top Uber | [LC 42](https://leetcode.com/problems/trapping rain water/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Trapping%20Rain%20Water) |

### Qua - Sliding Window (Tempo estimado: 2.5h)
> **Nota:** #3 e #76 estão ambos no top 30 Uber. Padrão: expand right, shrink left quando viola constraint.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 3 | **Longest Substring Without Repeating** | 🔴 Top Uber | [LC 3](https://leetcode.com/problems/longest substring without repeating/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Substring%20Without%20Repeating) / [PT-BR](https://www.youtube.com/watch?v=U7Pq3EhXL3g) |
| 76 | **Minimum Window Substring** | 🔴 Top Uber | [LC 76](https://leetcode.com/problems/minimum window substring/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Minimum%20Window%20Substring) |
| 904 | **Fruit Into Baskets (sub #340)** | 🟠 Alta | [LC 904](https://leetcode.com/problems/fruit into baskets (sub #340)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Fruit%20Into%20Baskets%20(sub%20%23340)) |
| 560 | **Subarray Sum Equals K** | 🟠 Alta | [LC 560](https://leetcode.com/problems/subarray sum equals k/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Subarray%20Sum%20Equals%20K) |

### Qui - Sliding Window avançado + deque (Tempo estimado: 3h)
> **Nota:** #239 usa deque monotônico — top 40 Uber. #567 e #438: sliding window com Counter.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 239 | **Sliding Window Maximum** | 🟠 Alta | [LC 239](https://leetcode.com/problems/sliding window maximum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Sliding%20Window%20Maximum) |
| 567 | **Permutation in String** | 🟠 Alta | [LC 567](https://leetcode.com/problems/permutation in string/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Permutation%20in%20String) |
| 438 | **Find All Anagrams in a String** | 🟠 Alta | [LC 438](https://leetcode.com/problems/find all anagrams in a string/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Find%20All%20Anagrams%20in%20a%20String) |
| 128 | **Longest Consecutive Sequence** | 🔴 Top Uber | [LC 128](https://leetcode.com/problems/longest consecutive sequence/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Consecutive%20Sequence) / [PT-BR](https://www.youtube.com/watch?v=Oj6U1dj3Aqs) |

### Sex - Arrays — matrix e simulação (Tempo estimado: 2.5h)
> **Nota:** Valid Sudoku e Spiral Matrix estão na interseção Top150+Uber. Foco em indexação correta.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 36 | **Valid Sudoku** | 🔴 Top Uber | [LC 36](https://leetcode.com/problems/valid sudoku/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Valid%20Sudoku) |
| 54 | **Spiral Matrix** | 🔴 Top Uber | [LC 54](https://leetcode.com/problems/spiral matrix/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Spiral%20Matrix) |
| 53 | **Maximum Subarray** | 🔴 Top Uber | [LC 53](https://leetcode.com/problems/maximum subarray/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Maximum%20Subarray) / [PT-BR](https://www.youtube.com/watch?v=5JOzEG8k57U) |
| 121 | **Best Time to Buy and Sell Stock** | 🔴 Top Uber | [LC 121](https://leetcode.com/problems/best time to buy and sell stock/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20and%20Sell%20Stock) |
| 122 | **Best Time to Buy and Sell Stock II** | 🔴 Top Uber | [LC 122](https://leetcode.com/problems/best time to buy and sell stock ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Best%20Time%20to%20Buy%20and%20Sell%20Stock%20II) |

### Sáb - Revisão sem IDE (Tempo estimado: 2h)
> **Nota:** Escrever em papel: sliding window template, two pointers template. Verbalizar complexidade.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 76 | **Min Window Substring (refazer)** | 🔵 Revisão | [LC 76](https://leetcode.com/problems/min window substring (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Min%20Window%20Substring%20(refazer)) |
| 239 | **Sliding Window Max (refazer)** | 🔵 Revisão | [LC 239](https://leetcode.com/problems/sliding window max (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Sliding%20Window%20Max%20(refazer)) |
| 15 | **3Sum (refazer)** | 🔵 Revisão | [LC 15](https://leetcode.com/problems/3sum (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+3Sum%20(refazer)) |
| 560 | **Subarray Sum K (refazer)** | 🔵 Revisão | [LC 560](https://leetcode.com/problems/subarray sum k (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Subarray%20Sum%20K%20(refazer)) |

---

## Semana 2: Stack, Calculadoras & Binary Search
*Objetivo/Foco: #224 Basic Calculator — top 25 Uber · #34 — top 30 Uber*

### Seg - Stack fundamentos (Tempo estimado: 2h)
> **Nota:** Valid Parentheses, Min Stack e Evaluate RPN são interseção Top150+Uber. Base de tudo.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 20 | **Valid Parentheses** | 🔴 Top Uber | [LC 20](https://leetcode.com/problems/valid parentheses/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Valid%20Parentheses) / [PT-BR](https://www.youtube.com/watch?v=eGgZ52DquRo) |
| 155 | **Min Stack** | 🔴 Top Uber | [LC 155](https://leetcode.com/problems/min stack/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Min%20Stack) |
| 150 | **Evaluate Reverse Polish Notation** | 🔴 Top Uber | [LC 150](https://leetcode.com/problems/evaluate reverse polish notation/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Evaluate%20Reverse%20Polish%20Notation) |
| 739 | **Daily Temperatures** | 🟠 Alta | [LC 739](https://leetcode.com/problems/daily temperatures/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Daily%20Temperatures) |

### Ter - Calculadoras com pilha (Tempo estimado: 3h)
> **Nota:** #224 (Top150∩Uber), #227 e #772 (Uber específicos). Padrão: stack de nums + sinal pendente.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 224 | **Basic Calculator** | 🔴 Top Uber | [LC 224](https://leetcode.com/problems/basic calculator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator) |
| 227 | **Basic Calculator II** | 🟠 Alta | [LC 227](https://leetcode.com/problems/basic calculator ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator%20II) |
| 772 | **Basic Calculator III** | 🟠 Alta | [LC 772](https://leetcode.com/problems/basic calculator iii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator%20III) |
| 22 | **Generate Parentheses** | 🔴 Top Uber | [LC 22](https://leetcode.com/problems/generate parentheses/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Generate%20Parentheses) |

### Qua - Binary Search clássico (Tempo estimado: 2.5h)
> **Nota:** #34 está top 30 Uber e no Top150. Rotated array: identificar metade ordenada antes de decidir.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 33 | **Search in Rotated Sorted Array** | 🔴 Top Uber | [LC 33](https://leetcode.com/problems/search in rotated sorted array/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Search%20in%20Rotated%20Sorted%20Array) |
| 34 | **Find First and Last Position** | 🔴 Top Uber | [LC 34](https://leetcode.com/problems/find first and last position/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Find%20First%20and%20Last%20Position) |
| 153 | **Find Minimum in Rotated Sorted Array** | 🟠 Alta | [LC 153](https://leetcode.com/problems/find minimum in rotated sorted array/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Find%20Minimum%20in%20Rotated%20Sorted%20Array) |
| 162 | **Find Peak Element** | 🔴 Top Uber | [LC 162](https://leetcode.com/problems/find peak element/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Find%20Peak%20Element) |
| 74 | **Search a 2D Matrix** | 🔴 Top Uber | [LC 74](https://leetcode.com/problems/search a 2d matrix/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Search%20a%202D%20Matrix) |

### Qui - Binary Search on answer + design (Tempo estimado: 2.5h)
> **Nota:** #528 Random Pick with Weight: prefix sum + binary search. Clássico de sistema distribuído.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 528 | **Random Pick with Weight** | 🟠 Alta | [LC 528](https://leetcode.com/problems/random pick with weight/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Random%20Pick%20with%20Weight) |
| 668 | **Kth Smallest in Multiplication Table** | 🟠 Alta | [LC 668](https://leetcode.com/problems/kth smallest in multiplication table/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Kth%20Smallest%20in%20Multiplication%20Table) |
| 1011 | **Capacity to Ship Packages** | 🟠 Alta | [LC 1011](https://leetcode.com/problems/capacity to ship packages/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Capacity%20to%20Ship%20Packages) |
| 380 | **Insert Delete GetRandom O(1)** | 🔴 Top Uber | [LC 380](https://leetcode.com/problems/insert delete getrandom o(1)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Insert%20Delete%20GetRandom%20O(1)) |

### Sex - Intervals (Tempo estimado: 2.5h)
> **Nota:** #56 e #57 são interseção Top150+Uber. #986 e #253 são top 5 da lista Uber.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 56 | **Merge Intervals** | 🔴 Top Uber | [LC 56](https://leetcode.com/problems/merge intervals/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Merge%20Intervals) |
| 57 | **Insert Interval** | 🔴 Top Uber | [LC 57](https://leetcode.com/problems/insert interval/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Insert%20Interval) |
| 986 | **Interval List Intersections** | 🟠 Alta | [LC 986](https://leetcode.com/problems/interval list intersections/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interval%20List%20Intersections) |
| 253 | **Meeting Rooms II** | 🟠 Alta | [LC 253](https://leetcode.com/problems/meeting rooms ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Meeting%20Rooms%20II) |
| 759 | **Employee Free Time** | 🟠 Alta | [LC 759](https://leetcode.com/problems/employee free time/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Employee%20Free%20Time) |

### Sáb - Mock cronometrado (Tempo estimado: 1.5h)
> **Nota:** 2 problemas Medium sem saber a categoria. 20min cada. Identificar padrão antes de codificar.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 33 | **Search Rotated (refazer)** | 🔵 Revisão | [LC 33](https://leetcode.com/problems/search rotated (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Search%20Rotated%20(refazer)) |
| 56 | **Merge Intervals (refazer)** | 🔵 Revisão | [LC 56](https://leetcode.com/problems/merge intervals (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Merge%20Intervals%20(refazer)) |
| 224 | **Basic Calculator (refazer)** | 🔵 Revisão | [LC 224](https://leetcode.com/problems/basic calculator (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator%20(refazer)) |
| 528 | **Random Pick (refazer)** | 🔵 Revisão | [LC 528](https://leetcode.com/problems/random pick (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Random%20Pick%20(refazer)) |

---

## Semana 3: Linked List & Trees
*Objetivo/Foco: #146 LRU Cache + #297 Serialize BT — top 40 Uber*

### Seg - Linked List manipulação (Tempo estimado: 2.5h)
> **Nota:** Todos na interseção Top150+Uber. Sempre desenhar ponteiros antes de codificar.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 21 | **Merge Two Sorted Lists** | 🔴 Top Uber | [LC 21](https://leetcode.com/problems/merge two sorted lists/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Merge%20Two%20Sorted%20Lists) |
| 2 | **Add Two Numbers** | 🔴 Top Uber | [LC 2](https://leetcode.com/problems/add two numbers/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Add%20Two%20Numbers) |
| 138 | **Copy List with Random Pointer** | 🔴 Top Uber | [LC 138](https://leetcode.com/problems/copy list with random pointer/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Copy%20List%20with%20Random%20Pointer) |
| 146 | **LRU Cache** | 🔴 Top Uber | [LC 146](https://leetcode.com/problems/lru cache/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LRU%20Cache) |

### Ter - LRU + LFU + Serialize (Tempo estimado: 3h)
> **Nota:** LRU = dict + doubly linked list. LFU = dict de frequências + dict freq→OrderedDict. Ambos top 50.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 460 | **LFU Cache** | 🟠 Alta | [LC 460](https://leetcode.com/problems/lfu cache/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LFU%20Cache) |
| 297 | **Serialize and Deserialize Binary Tree** | 🟠 Alta | [LC 297](https://leetcode.com/problems/serialize and deserialize binary tree/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Serialize%20and%20Deserialize%20Binary%20Tree) |
| 428 | **Serialize/Deserialize N-ary Tree** | 🟠 Alta | [LC 428](https://leetcode.com/problems/serialize/deserialize n-ary tree/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Serialize%2FDeserialize%20N-ary%20Tree) |

### Qua - Trees — DFS e LCA (Tempo estimado: 2.5h)
> **Nota:** Todos na interseção Top150+Uber. LCA: nó onde caminhos para p e q divergem.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 236 | **LCA of Binary Tree** | 🔴 Top Uber | [LC 236](https://leetcode.com/problems/lca of binary tree/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LCA%20of%20Binary%20Tree) |
| 199 | **Binary Tree Right Side View** | 🔴 Top Uber | [LC 199](https://leetcode.com/problems/binary tree right side view/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Binary%20Tree%20Right%20Side%20View) |
| 102 | **Binary Tree Level Order Traversal** | 🔴 Top Uber | [LC 102](https://leetcode.com/problems/binary tree level order traversal/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Binary%20Tree%20Level%20Order%20Traversal) / [PT-BR](https://www.youtube.com/watch?v=bUuVc7yimpA) |
| 101 | **Symmetric Tree** | 🔴 Top Uber | [LC 101](https://leetcode.com/problems/symmetric tree/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Symmetric%20Tree) |

### Qui - Trees — paths e BST (Tempo estimado: 2.5h)
> **Nota:** #124 (Top150 crítico), #173 e #230 (Top150∩Uber). BST Iterator: pilha simulando inorder.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 124 | **Binary Tree Maximum Path Sum** | 🟠 Alta | [LC 124](https://leetcode.com/problems/binary tree maximum path sum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Binary%20Tree%20Maximum%20Path%20Sum) |
| 173 | **BST Iterator** | 🔴 Top Uber | [LC 173](https://leetcode.com/problems/bst iterator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+BST%20Iterator) |
| 230 | **Kth Smallest in BST** | 🔴 Top Uber | [LC 230](https://leetcode.com/problems/kth smallest in bst/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Kth%20Smallest%20in%20BST) |
| 98 | **Validate BST** | 🟠 Alta | [LC 98](https://leetcode.com/problems/validate bst/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Validate%20BST) / [PT-BR](https://www.youtube.com/watch?v=1d4ZYXMkHpo) |

### Sex - Tries (Tempo estimado: 2.5h)
> **Nota:** #208 e #211 (Top150 crítico), #212 (Top150∩Uber), #642 (Uber top 50). Autocomplete: Trie + min-heap.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 208 | **Implement Trie** | 🟠 Alta | [LC 208](https://leetcode.com/problems/implement trie/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Implement%20Trie) |
| 211 | **Add and Search Word** | 🟠 Alta | [LC 211](https://leetcode.com/problems/add and search word/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Add%20and%20Search%20Word) |
| 212 | **Word Search II** | 🔴 Top Uber | [LC 212](https://leetcode.com/problems/word search ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Search%20II) |
| 642 | **Design Search Autocomplete** | 🟠 Alta | [LC 642](https://leetcode.com/problems/design search autocomplete/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Design%20Search%20Autocomplete) |

### Sáb - Revisão Trees + Design (Tempo estimado: 2h)
> **Nota:** Refazer sem template: LRU, Serialize BT, LCA. Os 3 mais cobrados em onsite Uber backend.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 146 | **LRU Cache (refazer)** | 🔵 Revisão | [LC 146](https://leetcode.com/problems/lru cache (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LRU%20Cache%20(refazer)) |
| 297 | **Serialize BT (refazer)** | 🔵 Revisão | [LC 297](https://leetcode.com/problems/serialize bt (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Serialize%20BT%20(refazer)) |
| 236 | **LCA (refazer)** | 🔵 Revisão | [LC 236](https://leetcode.com/problems/lca (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LCA%20(refazer)) |

---

## Semana 4: Graphs — núcleo absoluto Uber
*Objetivo/Foco: #332 Reconstruct Itinerary (#2 Uber) · #815 Bus Routes · #269 Alien Dict*

### Seg - BFS/DFS em grid (Tempo estimado: 2.5h)
> **Nota:** #200 e #130 são Top150∩Uber. #529 Minesweeper top 10 Uber. #286 multi-source BFS dos gates.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 200 | **Number of Islands** | 🔴 Top Uber | [LC 200](https://leetcode.com/problems/number of islands/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Number%20of%20Islands) / [PT-BR](https://www.youtube.com/watch?v=S37A_G6u7Lg) |
| 130 | **Surrounded Regions** | 🔴 Top Uber | [LC 130](https://leetcode.com/problems/surrounded regions/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Surrounded%20Regions) |
| 529 | **Minesweeper** | 🟠 Alta | [LC 529](https://leetcode.com/problems/minesweeper/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Minesweeper) |
| 286 | **Walls and Gates** | 🟠 Alta | [LC 286](https://leetcode.com/problems/walls and gates/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Walls%20and%20Gates) |

### Ter - BFS em grafo implícito (Tempo estimado: 3h)
> **Nota:** #127 (Top150∩Uber), #815 e #773 (Uber top 15). Montar adjacência na hora. #909 (Top150∩Uber).

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 127 | **Word Ladder** | 🔴 Top Uber | [LC 127](https://leetcode.com/problems/word ladder/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Ladder) |
| 815 | **Bus Routes** | 🟠 Alta | [LC 815](https://leetcode.com/problems/bus routes/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes) |
| 773 | **Sliding Puzzle** | 🟠 Alta | [LC 773](https://leetcode.com/problems/sliding puzzle/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Sliding%20Puzzle) |
| 909 | **Snakes and Ladders** | 🔴 Top Uber | [LC 909](https://leetcode.com/problems/snakes and ladders/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Snakes%20and%20Ladders) |

### Qua - Clone + Weighted graphs (Tempo estimado: 2.5h)
> **Nota:** #133 e #399 são Top150∩Uber. Evaluate Division: grafo ponderado com produto acumulado nas arestas.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 133 | **Clone Graph** | 🔴 Top Uber | [LC 133](https://leetcode.com/problems/clone graph/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Clone%20Graph) |
| 399 | **Evaluate Division** | 🔴 Top Uber | [LC 399](https://leetcode.com/problems/evaluate division/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Evaluate%20Division) |
| 427 | **Construct Quad Tree** | 🔴 Top Uber | [LC 427](https://leetcode.com/problems/construct quad tree/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Construct%20Quad%20Tree) |

### Qui - Topological Sort (Tempo estimado: 3h)
> **Nota:** #207 e #210 (Top150∩Uber). #332 é #2 da lista Uber — DFS Euleriano (Hierholzer). #269 top 15.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 207 | **Course Schedule** | 🔴 Top Uber | [LC 207](https://leetcode.com/problems/course schedule/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Course%20Schedule) |
| 210 | **Course Schedule II** | 🔴 Top Uber | [LC 210](https://leetcode.com/problems/course schedule ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Course%20Schedule%20II) |
| 332 | **Reconstruct Itinerary** | 🟠 Alta | [LC 332](https://leetcode.com/problems/reconstruct itinerary/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Reconstruct%20Itinerary) |
| 269 | **Alien Dictionary** | 🟠 Alta | [LC 269](https://leetcode.com/problems/alien dictionary/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Alien%20Dictionary) |

### Sex - BFS avançado (Tempo estimado: 2.5h)
> **Nota:** Shortest Distance from All Buildings: BFS multi-source de cada prédio. Anotar soma de distâncias.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 317 | **Shortest Distance from All Buildings** | 🟠 Alta | [LC 317](https://leetcode.com/problems/shortest distance from all buildings/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Shortest%20Distance%20from%20All%20Buildings) |
| 490 | **The Maze** | 🟠 Alta | [LC 490](https://leetcode.com/problems/the maze/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+The%20Maze) |
| 329 | **Longest Increasing Path in Matrix** | 🟠 Alta | [LC 329](https://leetcode.com/problems/longest increasing path in matrix/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Increasing%20Path%20in%20Matrix) |

### Sáb - Revisão intensiva Graphs (Tempo estimado: 2.5h)
> **Nota:** Os 3 mais específicos da Uber. Resolver sem consultar em menos de 30min cada.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 332 | **Reconstruct Itinerary (refazer)** | 🔵 Revisão | [LC 332](https://leetcode.com/problems/reconstruct itinerary (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Reconstruct%20Itinerary%20(refazer)) |
| 815 | **Bus Routes (refazer)** | 🔵 Revisão | [LC 815](https://leetcode.com/problems/bus routes (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes%20(refazer)) |
| 269 | **Alien Dictionary (refazer)** | 🔵 Revisão | [LC 269](https://leetcode.com/problems/alien dictionary (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Alien%20Dictionary%20(refazer)) |

---

## Semana 5: Heaps, Backtracking & Greedy
*Objetivo/Foco: #295 Median Stream · #465 Optimal Account Balancing (top 5 Uber)*

### Seg - Heaps fundamentos (Tempo estimado: 2.5h)
> **Nota:** #295 (Top150∩Uber), #23 (Top150 crítico). #347 e #973 top 40 Uber. heapq: só min-heap, inverter sinal.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 295 | **Find Median from Data Stream** | 🔴 Top Uber | [LC 295](https://leetcode.com/problems/find median from data stream/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Find%20Median%20from%20Data%20Stream) |
| 23 | **Merge k Sorted Lists** | 🟠 Alta | [LC 23](https://leetcode.com/problems/merge k sorted lists/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Merge%20k%20Sorted%20Lists) |
| 347 | **Top K Frequent Elements** | 🟠 Alta | [LC 347](https://leetcode.com/problems/top k frequent elements/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Top%20K%20Frequent%20Elements) |
| 973 | **K Closest Points to Origin** | 🟠 Alta | [LC 973](https://leetcode.com/problems/k closest points to origin/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+K%20Closest%20Points%20to%20Origin) |
| 621 | **Task Scheduler** | 🟠 Alta | [LC 621](https://leetcode.com/problems/task scheduler/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Task%20Scheduler) |

### Ter - Heaps — design (Tempo estimado: 3h)
> **Nota:** #253 Meeting Rooms II: min-heap de end times. #451 Sort by Freq: Counter + sorted.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 253 | **Meeting Rooms II (revisão)** | 🟠 Alta | [LC 253](https://leetcode.com/problems/meeting rooms ii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Meeting%20Rooms%20II%20(revis%C3%A3o)) |
| 739 | **Daily Temperatures (revisão)** | 🟠 Alta | [LC 739](https://leetcode.com/problems/daily temperatures (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Daily%20Temperatures%20(revis%C3%A3o)) |
| 451 | **Sort Characters By Frequency** | 🟠 Alta | [LC 451](https://leetcode.com/problems/sort characters by frequency/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Sort%20Characters%20By%20Frequency) |

### Qua - Backtracking core (Tempo estimado: 2.5h)
> **Nota:** #46 e #39 (Top150∩Uber), #17 e #22 (Top150∩Uber). Template: choose/explore/unchoose.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 46 | **Permutations** | 🔴 Top Uber | [LC 46](https://leetcode.com/problems/permutations/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Permutations) |
| 39 | **Combination Sum** | 🔴 Top Uber | [LC 39](https://leetcode.com/problems/combination sum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Combination%20Sum) |
| 17 | **Letter Combinations** | 🔴 Top Uber | [LC 17](https://leetcode.com/problems/letter combinations/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Letter%20Combinations) |
| 79 | **Word Search** | 🔴 Top Uber | [LC 79](https://leetcode.com/problems/word search/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Search) / [PT-BR](https://www.youtube.com/watch?v=cPSk7HTnTkQ) |
| 22 | **Generate Parentheses (revisão)** | 🔴 Top Uber | [LC 22](https://leetcode.com/problems/generate parentheses (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Generate%20Parentheses%20(revis%C3%A3o)) |

### Qui - Backtracking avançado (Tempo estimado: 3h)
> **Nota:** #291 e #465 estão no top 5 da lista Uber. Backtracking com estado mapeado.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 291 | **Word Pattern II** | 🟠 Alta | [LC 291](https://leetcode.com/problems/word pattern ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Pattern%20II) |
| 465 | **Optimal Account Balancing** | 🟠 Alta | [LC 465](https://leetcode.com/problems/optimal account balancing/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Optimal%20Account%20Balancing) |
| 131 | **Palindrome Partitioning** | 🟠 Alta | [LC 131](https://leetcode.com/problems/palindrome partitioning/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Palindrome%20Partitioning) |

### Sex - Greedy + Math (Tempo estimado: 2.5h)
> **Nota:** #45 e #122 (Top150∩Uber). #149 (Top150∩Uber): Max Points on a Line — slope com frações.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 45 | **Jump Game II** | 🔴 Top Uber | [LC 45](https://leetcode.com/problems/jump game ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Jump%20Game%20II) |
| 122 | **Best Time II (revisão)** | 🔴 Top Uber | [LC 122](https://leetcode.com/problems/best time ii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Best%20Time%20II%20(revis%C3%A3o)) |
| 55 | **Jump Game** | 🔴 Top Uber | [LC 55](https://leetcode.com/problems/jump game/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Jump%20Game) |
| 149 | **Max Points on a Line** | 🔴 Top Uber | [LC 149](https://leetcode.com/problems/max points on a line/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Max%20Points%20on%20a%20Line) |

### Sáb - Mock OA CodeSignal (Tempo estimado: 2.5h)
> **Nota:** 4 problemas, 70min total. Usar leetcode.com em modo contest. Anotar onde travou.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 295 | **Median Stream (mock)** | 🔵 Revisão | [LC 295](https://leetcode.com/problems/median stream (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Median%20Stream%20(mock)) |
| 46 | **Permutations (mock)** | 🔵 Revisão | [LC 46](https://leetcode.com/problems/permutations (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Permutations%20(mock)) |
| 253 | **Meeting Rooms II (mock)** | 🔵 Revisão | [LC 253](https://leetcode.com/problems/meeting rooms ii (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Meeting%20Rooms%20II%20(mock)) |
| 815 | **Bus Routes (mock)** | 🔵 Revisão | [LC 815](https://leetcode.com/problems/bus routes (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes%20(mock)) |

---

## Semana 6: Dynamic Programming
*Objetivo/Foco: #97 Interleaving (top 10 Uber) · #741 Cherry Pickup (#3 Uber)*

### Seg - 1D DP clássicos (Tempo estimado: 2.5h)
> **Nota:** Todos Top150. #70 e #198 fáceis mas base. #139 e #322 são Top150∩Uber. Começar brute force, memoizar.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 70 | **Climbing Stairs** | 🔴 Top Uber | [LC 70](https://leetcode.com/problems/climbing stairs/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Climbing%20Stairs) |
| 198 | **House Robber** | 🔴 Top Uber | [LC 198](https://leetcode.com/problems/house robber/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+House%20Robber) |
| 139 | **Word Break** | 🔴 Top Uber | [LC 139](https://leetcode.com/problems/word break/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Break) |
| 322 | **Coin Change** | 🟠 Alta | [LC 322](https://leetcode.com/problems/coin change/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Coin%20Change) |
| 300 | **Longest Increasing Subsequence** | 🟠 Alta | [LC 300](https://leetcode.com/problems/longest increasing subsequence/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Increasing%20Subsequence) |

### Ter - 1D DP — strings (Tempo estimado: 3h)
> **Nota:** #5 (Top150∩Uber), #647 e #91 (Uber específicos). Decode Ways: atenção aos casos '0' e '00'.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 5 | **Longest Palindromic Substring** | 🔴 Top Uber | [LC 5](https://leetcode.com/problems/longest palindromic substring/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Palindromic%20Substring) |
| 647 | **Palindromic Substrings** | 🟠 Alta | [LC 647](https://leetcode.com/problems/palindromic substrings/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Palindromic%20Substrings) |
| 91 | **Decode Ways** | 🟠 Alta | [LC 91](https://leetcode.com/problems/decode ways/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Decode%20Ways) |
| 152 | **Maximum Product Subarray** | 🟠 Alta | [LC 152](https://leetcode.com/problems/maximum product subarray/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Maximum%20Product%20Subarray) |

### Qua - 2D DP — strings (Tempo estimado: 3h)
> **Nota:** #97 (Top150∩Uber) é top 10 Uber. #72 (Top150 crítico). Montar tabela DP para exemplo pequeno primeiro.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 97 | **Interleaving String** | 🔴 Top Uber | [LC 97](https://leetcode.com/problems/interleaving string/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interleaving%20String) |
| 72 | **Edit Distance** | 🟠 Alta | [LC 72](https://leetcode.com/problems/edit distance/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Edit%20Distance) |
| 416 | **Partition Equal Subset Sum** | 🟠 Alta | [LC 416](https://leetcode.com/problems/partition equal subset sum/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Partition%20Equal%20Subset%20Sum) |
| 63 | **Unique Paths II** | 🟠 Alta | [LC 63](https://leetcode.com/problems/unique paths ii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Unique%20Paths%20II) |

### Qui - 2D DP — grid e stocks (Tempo estimado: 3h)
> **Nota:** #221 (Top150∩Uber). #63 e #63 (Top150 crítico). Stocks III e IV: DP com estados de transação.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 221 | **Maximal Square** | 🔴 Top Uber | [LC 221](https://leetcode.com/problems/maximal square/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Maximal%20Square) |
| 63 | **Unique Paths II (revisão)** | 🟠 Alta | [LC 63](https://leetcode.com/problems/unique paths ii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Unique%20Paths%20II%20(revis%C3%A3o)) |
| 123 | **Best Time Stock III** | 🔴 Top Uber | [LC 123](https://leetcode.com/problems/best time stock iii/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Best%20Time%20Stock%20III) |
| 188 | **Best Time Stock IV** | 🔴 Top Uber | [LC 188](https://leetcode.com/problems/best time stock iv/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Best%20Time%20Stock%20IV) |

### Sex - DP Hard Uber (Tempo estimado: 3h)
> **Nota:** #741 Cherry Pickup é #3 na lista Uber. DP em (step, r1, r2). Ler formulação antes de codificar.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 741 | **Cherry Pickup** | 🟠 Alta | [LC 741](https://leetcode.com/problems/cherry pickup/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cherry%20Pickup) |
| 329 | **Longest Increasing Path in Matrix (revisão)** | 🟠 Alta | [LC 329](https://leetcode.com/problems/longest increasing path in matrix (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Increasing%20Path%20in%20Matrix%20(revis%C3%A3o)) |
| 291 | **Word Pattern II (revisão)** | 🟠 Alta | [LC 291](https://leetcode.com/problems/word pattern ii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Pattern%20II%20(revis%C3%A3o)) |

### Sáb - Revisão DP whiteboard (Tempo estimado: 2h)
> **Nota:** Escrever recorrência em papel. Cherry Pickup: r1 e r2 se movem juntos por step (não independentes).

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 97 | **Interleaving String (refazer)** | 🔵 Revisão | [LC 97](https://leetcode.com/problems/interleaving string (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interleaving%20String%20(refazer)) |
| 741 | **Cherry Pickup (refazer)** | 🔵 Revisão | [LC 741](https://leetcode.com/problems/cherry pickup (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cherry%20Pickup%20(refazer)) |
| 139 | **Word Break (refazer)** | 🔵 Revisão | [LC 139](https://leetcode.com/problems/word break (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Word%20Break%20(refazer)) |

---

## Semana 7: Strings especiais & Simulação
*Objetivo/Foco: #68 Text Justification · #591 Tag Validator · #772 Calculator III — top 10 Uber*

### Seg - Strings simulação (Tempo estimado: 3h)
> **Nota:** #68 (Top150∩Uber) e #591 (Uber top 10). Simulação pura — ler o enunciado devagar, sem truques.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 68 | **Text Justification** | 🔴 Top Uber | [LC 68](https://leetcode.com/problems/text justification/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Text%20Justification) |
| 591 | **Tag Validator** | 🟠 Alta | [LC 591](https://leetcode.com/problems/tag validator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Tag%20Validator) |
| 227 | **Basic Calculator II (revisão)** | 🟠 Alta | [LC 227](https://leetcode.com/problems/basic calculator ii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator%20II%20(revis%C3%A3o)) |
| 772 | **Basic Calculator III (revisão)** | 🟠 Alta | [LC 772](https://leetcode.com/problems/basic calculator iii (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator%20III%20(revis%C3%A3o)) |

### Ter - Design + estruturas especiais (Tempo estimado: 3h)
> **Nota:** #460 LFU (Uber top 40). #642 Autocomplete = Trie + heap. #528 Random Pick (já visto, consolidar).

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 460 | **LFU Cache (revisão)** | 🟠 Alta | [LC 460](https://leetcode.com/problems/lfu cache (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+LFU%20Cache%20(revis%C3%A3o)) |
| 642 | **Design Search Autocomplete (revisão)** | 🟠 Alta | [LC 642](https://leetcode.com/problems/design search autocomplete (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Design%20Search%20Autocomplete%20(revis%C3%A3o)) |
| 528 | **Random Pick with Weight (revisão)** | 🟠 Alta | [LC 528](https://leetcode.com/problems/random pick with weight (revisão)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Random%20Pick%20with%20Weight%20(revis%C3%A3o)) |

### Qua - Revisão Graphs hard (Tempo estimado: 2.5h)
> **Nota:** Reconstruct Itinerary sem olhar: implementar Hierholzer. Alien Dictionary: derivar grafo de pares.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 332 | **Reconstruct Itinerary (refazer)** | 🔵 Revisão | [LC 332](https://leetcode.com/problems/reconstruct itinerary (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Reconstruct%20Itinerary%20(refazer)) |
| 269 | **Alien Dictionary (refazer)** | 🔵 Revisão | [LC 269](https://leetcode.com/problems/alien dictionary (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Alien%20Dictionary%20(refazer)) |
| 815 | **Bus Routes (refazer)** | 🔵 Revisão | [LC 815](https://leetcode.com/problems/bus routes (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes%20(refazer)) |

### Qui - Revisão DP hard + Uber (Tempo estimado: 2.5h)
> **Nota:** Bus Routes e Sliding Puzzle: ambos precisam de modelagem cuidadosa do estado.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 741 | **Cherry Pickup (refazer)** | 🔵 Revisão | [LC 741](https://leetcode.com/problems/cherry pickup (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cherry%20Pickup%20(refazer)) |
| 773 | **Sliding Puzzle (refazer)** | 🔵 Revisão | [LC 773](https://leetcode.com/problems/sliding puzzle (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Sliding%20Puzzle%20(refazer)) |
| 465 | **Optimal Account Balancing (refazer)** | 🔵 Revisão | [LC 465](https://leetcode.com/problems/optimal account balancing (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Optimal%20Account%20Balancing%20(refazer)) |

### Sex - Gaps e pontos fracos (Tempo estimado: 2h)
> **Nota:** Identificar os 4 problemas onde você mais travou no mock e refazê-los do zero.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 4 | **Median of Two Sorted Arrays** | 🔴 Top Uber | [LC 4](https://leetcode.com/problems/median of two sorted arrays/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Median%20of%20Two%20Sorted%20Arrays) |
| 149 | **Max Points on a Line** | 🔴 Top Uber | [LC 149](https://leetcode.com/problems/max points on a line/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Max%20Points%20on%20a%20Line) |
| 329 | **Longest Increasing Path (refazer)** | 🔵 Revisão | [LC 329](https://leetcode.com/problems/longest increasing path (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Longest%20Increasing%20Path%20(refazer)) |
| 591 | **Tag Validator (refazer)** | 🔵 Revisão | [LC 591](https://leetcode.com/problems/tag validator (refazer)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Tag%20Validator%20(refazer)) |

### Sáb - Mock II — onsite (Tempo estimado: 3h)
> **Nota:** 2 problemas com narração em voz alta. Gravar se possível. Rever onde a comunicação travou.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 295 | **Median Stream (mock)** | 🔵 Revisão | [LC 295](https://leetcode.com/problems/median stream (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Median%20Stream%20(mock)) |
| 332 | **Reconstruct Itinerary (mock)** | 🔵 Revisão | [LC 332](https://leetcode.com/problems/reconstruct itinerary (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Reconstruct%20Itinerary%20(mock)) |
| 97 | **Interleaving String (mock)** | 🔵 Revisão | [LC 97](https://leetcode.com/problems/interleaving string (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interleaving%20String%20(mock)) |
| 68 | **Text Justification (mock)** | 🔵 Revisão | [LC 68](https://leetcode.com/problems/text justification (mock)/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Text%20Justification%20(mock)) |

---

## Semana 8: Simulados finais
*Objetivo/Foco: Ajuste fino · comunicação · edge cases · 26/05*

### Seg - Mock III CodeSignal (Tempo estimado: 2.5h)
> **Nota:** 4 problemas, 70min, sem pausas. Stdlib Python apenas: heapq, collections, functools.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 815 | **Bus Routes** | 🟠 Alta | [LC 815](https://leetcode.com/problems/bus routes/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes) |
| 97 | **Interleaving String** | 🔴 Top Uber | [LC 97](https://leetcode.com/problems/interleaving string/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interleaving%20String) |
| 465 | **Optimal Account Balancing** | 🟠 Alta | [LC 465](https://leetcode.com/problems/optimal account balancing/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Optimal%20Account%20Balancing) |
| 591 | **Tag Validator** | 🟠 Alta | [LC 591](https://leetcode.com/problems/tag validator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Tag%20Validator) |

### Ter - 5 pontos fracos (Tempo estimado: 2h)
> **Nota:** Cherry Pickup, Reconstruct Itinerary, Basic Calculator, Optimal Account Balancing, Tag Validator.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 741 | **Cherry Pickup** | 🟠 Alta | [LC 741](https://leetcode.com/problems/cherry pickup/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Cherry%20Pickup) |
| 332 | **Reconstruct Itinerary** | 🟠 Alta | [LC 332](https://leetcode.com/problems/reconstruct itinerary/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Reconstruct%20Itinerary) |
| 224 | **Basic Calculator** | 🔴 Top Uber | [LC 224](https://leetcode.com/problems/basic calculator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Basic%20Calculator) |
| 465 | **Optimal Account Balancing** | 🟠 Alta | [LC 465](https://leetcode.com/problems/optimal account balancing/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Optimal%20Account%20Balancing) |
| 591 | **Tag Validator** | 🟠 Alta | [LC 591](https://leetcode.com/problems/tag validator/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Tag%20Validator) |

### Qua - Mock IV — narração total (Tempo estimado: 2h)
> **Nota:** Falar cada passo em voz alta. 'Começo com brute force O(n²), depois otimizo para...'

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 815 | **Bus Routes** | 🟠 Alta | [LC 815](https://leetcode.com/problems/bus routes/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Bus%20Routes) |
| 97 | **Interleaving String** | 🔴 Top Uber | [LC 97](https://leetcode.com/problems/interleaving string/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Interleaving%20String) |
| 295 | **Median Stream** | 🔴 Top Uber | [LC 295](https://leetcode.com/problems/median stream/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Median%20Stream) |
| 269 | **Alien Dictionary** | 🟠 Alta | [LC 269](https://leetcode.com/problems/alien dictionary/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Alien%20Dictionary) |

### Qui - Templates de memória (Tempo estimado: 1.5h)
> **Nota:** Escrever sem consultar: BFS, Dijkstra, Trie, Sliding Window, Backtracking, Union Find, DP 2D.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 200 | **BFS template** | 🔴 Top Uber | [LC 200](https://leetcode.com/problems/bfs template/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+BFS%20template) / [PT-BR](https://www.youtube.com/watch?v=S37A_G6u7Lg) |
| 295 | **Dijkstra/Heap template** | 🔴 Top Uber | [LC 295](https://leetcode.com/problems/dijkstra/heap template/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Dijkstra%2FHeap%20template) |
| 208 | **Trie template** | 🟠 Alta | [LC 208](https://leetcode.com/problems/trie template/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Trie%20template) |
| 97 | **DP 2D template** | 🔴 Top Uber | [LC 97](https://leetcode.com/problems/dp 2d template/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+DP%202D%20template) |

### Sex - Aquecimento leve (Tempo estimado: 1h)
> **Nota:** Dormir bem. 2 problemas Easy. Revisar: heapq.heappush/pop, deque, Counter, @lru_cache.

| # | Problema | Prioridade | Link LeetCode | Link Vídeo |
|---|---|---|---|---|
| 20 | **Valid Parentheses** | 🔴 Top Uber | [LC 20](https://leetcode.com/problems/valid parentheses/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Valid%20Parentheses) / [PT-BR](https://www.youtube.com/watch?v=eGgZ52DquRo) |
| 242 | **Valid Anagram** | 🔴 Top Uber | [LC 242](https://leetcode.com/problems/valid anagram/) | [NeetCode](https://www.youtube.com/results?search_query=neetcode+Valid%20Anagram) |

### 26/05 - Entrevista (Tempo estimado: —)
> **Nota:** 1 problema Easy 10min antes. Comunicar primeiro, codificar depois. Perguntar edge cases antes de começar.

*Nenhum problema listado para este dia.*

---

