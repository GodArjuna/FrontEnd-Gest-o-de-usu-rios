import { User, Task, ScheduleEntry, UserRole, UserStatus, TaskStatus, ScheduleType } from './types';

// Mapeamento de IDs de setor para nomes
export const SECTORS: { [key: number]: string } = {
  1: 'TI',
  2: 'Marketing',
  3: 'Vendas',
  4: 'Recursos Humanos',
};

// Mock de dados de usuários
export const MOCK_USERS: User[] = [
  { id: 1, name: 'Ana Silva', email: 'admin@example.com', password: 'password123', role: UserRole.Admin, department: 1, matricula: 'TI-001', status: UserStatus.Ativo, avatarUrl: 'https://picsum.photos/seed/1/100/100', salary: 15000, managerId: null },
  { id: 2, name: 'Bruno Costa', email: 'gestor.mkt@example.com', password: 'password123', role: UserRole.Gestor, department: 2, matricula: 'MKT-001', status: UserStatus.Ativo, avatarUrl: 'https://picsum.photos/seed/2/100/100', salary: 10000, managerId: 1 },
  { id: 3, name: 'Carla Dias', email: 'carla.dias@example.com', password: 'password123', role: UserRole.Colaborador, department: 2, matricula: 'MKT-002', status: UserStatus.Ativo, avatarUrl: 'https://picsum.photos/seed/3/100/100', salary: 5000, managerId: 2 },
  { id: 4, name: 'Daniel Alves', email: 'daniel.alves@example.com', password: 'password123', role: UserRole.Colaborador, department: 1, matricula: 'TI-002', status: UserStatus.Ativo, avatarUrl: 'https://picsum.photos/seed/4/100/100', salary: 7500, managerId: 1 },
  { id: 5, name: 'Eduarda Lima', email: 'eduarda.lima@example.com', password: 'password123', role: UserRole.Colaborador, department: 3, matricula: 'VEND-001', status: UserStatus.Inativo, avatarUrl: 'https://picsum.photos/seed/5/100/100', salary: 4500, managerId: 6 },
  { id: 6, name: 'Fábio Melo', email: 'gestor.vendas@example.com', password: 'password123', role: UserRole.Gestor, department: 3, matricula: 'VEND-002', status: UserStatus.Ativo, avatarUrl: 'https://picsum.photos/seed/6/100/100', salary: 9500, managerId: 1 },
];

// Mock de dados de tarefas
export const MOCK_TASKS: Task[] = [
  { id: 1, title: 'Desenvolver API de autenticação', description: 'Criar endpoints para login e registro.', assigneeId: 4, status: TaskStatus.Concluido, dueDate: '2024-07-20' },
  { id: 2, title: 'Planejar campanha de marketing Q3', description: 'Definir estratégias e canais para a nova campanha.', assigneeId: 2, status: TaskStatus.EmAndamento, dueDate: '2024-08-01' },
  { id: 3, title: 'Criar mockups da nova dashboard', description: 'Desenhar a interface da dashboard principal.', assigneeId: 3, status: TaskStatus.EmAndamento, dueDate: '2024-07-28' },
  { id: 4, title: 'Revisar documentação técnica', description: 'Analisar e corrigir a documentação da API.', assigneeId: 1, status: TaskStatus.Pendente, dueDate: '2024-08-05' },
  { id: 5, title: 'Prospectar novos clientes', description: 'Entrar em contato com 10 leads qualificados.', assigneeId: 6, status: TaskStatus.Pendente, dueDate: '2024-07-30' },
];

// Mock de dados de escala/agenda
export const MOCK_SCHEDULE: ScheduleEntry[] = [
    { id: 1, userId: 1, date: '2024-07-22', type: ScheduleType.Trabalho, description: 'Turno da manhã' },
    { id: 2, userId: 2, date: '2024-07-22', type: ScheduleType.Trabalho, description: 'Turno da tarde' },
    { id: 3, userId: 3, date: '2024-07-22', type: ScheduleType.Folga },
    { id: 4, userId: 4, date: '2024-07-23', type: ScheduleType.Trabalho },
    { id: 5, userId: 1, date: '2024-07-24', type: ScheduleType.Ferias },
    { id: 6, userId: 2, date: '2024-07-25', type: ScheduleType.Ferias },
    { id: 7, userId: 3, date: '2024-07-26', type: ScheduleType.Trabalho },
    { id: 8, userId: 4, date: '2024-07-26', type: ScheduleType.Trabalho },
];