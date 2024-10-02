
#  🇵🇹 🇧🇷 - Aplicativo Simples de Metas

Este é um aplicativo básico de gerenciamento de metas desenvolvido em React. Ele oferece aos usuários a capacidade de adicionar, exibir e gerenciar uma lista de metas. A estrutura do aplicativo foi projetada para ser fácil de manter e organizada, com cada componente separado em seu próprio ficheiro.

## Funcionalidade

- O aplicativo permite que os usuários insiram novas metas, que são exibidas em uma lista. A lista é atualizada dinamicamente sempre que uma nova meta é adicionada.
- Cada meta inserida pelo usuário é armazenada no estado da aplicação, e a lista é renderizada em tempo real com base no estado atual.

## Separação de Componentes

- Para manter um código limpo, o aplicativo é dividido em vários componentes, cada um responsável por uma funcionalidade específica:
  1. **GoalInput**: Um componente que inclui um campo de entrada e um botão para adicionar novas metas. Ele abre uma janela modal onde o usuário pode digitar sua meta.
  3. **GoalItem**: Cada meta na lista é representada por este componente, que garante que cada meta seja exibida corretamente.

## Geração de Chave Única

- O aplicativo usa a biblioteca `uuid` para gerar uma chave única para cada meta na lista. Essa chave é importante porque o React exige um identificador exclusivo para cada item da lista para otimizar a renderização. Sem chaves exclusivas, o React pode não atualizar a interface de forma eficiente quando a lista muda.

## Uso do Modal

- Uma janela modal é usada para capturar a entrada do usuário ao adicionar uma nova meta. Isso garante uma interface limpa e amigável, onde os usuários podem se concentrar em adicionar uma meta por vez.




# 🇬🇧🇺🇸 - Simple Goal App

This app is a basic goal management system developed using React. It provides users with the ability to add, display, and manage a list of goals. The application's structure is designed for maintainability and organization, with each component separated into its own file.

## Functionality

- The app allows users to enter new goals, which are displayed in a list. The list is dynamically updated whenever a new goal is added.
- Each goal that the user enters is stored in the application's state, and the list is rendered in real-time based on the state of the app.

## Component Separation

- To maintain a clean codebase, the app is divided into multiple components, each responsible for a specific feature:
  1. **GoalInput**: A component that includes an input field and a button for adding new goals. It opens a modal window where the user can type in their goal.
  3. **GoalItem**: Each goal in the list is represented by this component, which ensures that every goal is displayed properly.

## Unique Key Generation

- The app uses the `uuid` library to generate a unique key for each goal in the list. This key is important because React requires a unique identifier for each list item to optimize rendering. Without unique keys, React may not efficiently update the UI when the list changes.

## Modal Usage

- A modal window is used to capture the user's input when adding a new goal. This ensures a clean and user-friendly interface, where users can focus on adding one goal at a time.
