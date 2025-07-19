// types.ts

/**
 * Define os níveis de acesso dos usuários no sistema.
 */
export enum UserRole {
  Admin = 'Admin',
  Gestor = 'Gestor',
  Colaborador = 'Colaborador',
}

/**
 * Define o status de um usuário.
 */
export enum UserStatus {
  Ativo = 'Ativo',
  Inativo = 'Inativo',
}

/**
 * Define a estrutura de um objeto de usuário.
 * O ID é opcional para permitir a criação de novos usuários antes de serem salvos.
 */
export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string; // Usado apenas para simulação de login
  role: UserRole;
  department: number; // Alterado para número (ID do setor)
  matricula: string;
  status: UserStatus;
  avatarUrl: string;
  salary?: number; // Salário do colaborador
  managerId?: number | null; // ID do gestor direto
}

/**
 * Define os status possíveis para uma tarefa.
 */
export enum TaskStatus {
  Pendente = 'Pendente',
  EmAndamento = 'Em Andamento',
  Concluido = 'Concluído',
}

/**
 * Define a estrutura de um objeto de tarefa.
 */
export interface Task {
  id: number;
  title: string;
  description: string;
  assigneeId?: number;
  status: TaskStatus;
  dueDate: string;
}

/**
 * Define os tipos de agendamento (escala, folga, férias).
 */
export enum ScheduleType {
  Trabalho = 'Trabalho',
  Folga = 'Folga',
  Ferias = 'Férias',
}

/**
 * Define a estrutura de uma entrada na escala/agenda.
 */
export interface ScheduleEntry {
  id: number;
  userId: number;
  date: string; // Formato YYYY-MM-DD
  type: ScheduleType;
  description?: string;
}

/**
 * Define o tipo e a mensagem de uma notificação.
 */
export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error';
}