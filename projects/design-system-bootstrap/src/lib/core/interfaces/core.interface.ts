/**
 * Temas visuales disponibles.
 */
export type Themes = 
    | 'primary'
    | 'secondary' 
    | 'success' 
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

/** Tipo de tema para badges */
export type BadgeType = Themes;

/** Clases de texto disponibles para badges */
export type BadgeTypeText = 'text-white' | 'text-dark';

/** Tipo de tema para botones */
export type ButtonType = Themes;

/**
 * Configuración de un botón dentro de un grupo de botones.
 */
export interface ButtonGroupData {
  /** Identificador único del botón */
  idButton: string;

  /** Tipo visual del botón */
  type: ButtonType;

  /** Texto visible del botón */
  text: string;
}

/**
 * Representa un enlace de navegación.
 */
export interface NavLink {
    /** Texto visible del enlace */
    text: string;
    /** Url asociada al enlace */
    url: string;
}

/**
 * Configuración de la barra de navegación.
 */
export interface NavbarConfig {
  /** Título principal del Navbar */
  title: string;

  /** Configuración del icono del Navbar */
  iconConfig: NavbarIconConfig;

  /** Lista de enlaces de navegación */
  navLinks: NavLink[];
}

/**
 * Configuración del icono de la barra de navegación.
 */
export interface NavbarIconConfig {
    /** Nombre del icono (sin el prefijo `bi-`) */
    icon: string;

    /** Tamaño del icono en unidades `rem` */
    size: number;
}

/** Tamaños disponibles para el spinner. */
export type SpinnerSize = 'sm' | 'normal';

/** Datos de una alerta descartable. */
export interface AlertData {
  /** Identificador único de la alerta */
  id: string;
  /** Tipo visual de la alerta (color) */
  type: Themes;
  /** Icono de Bootstrap Icons mostrado junto al mensaje */
  icon: string;
  /** Mensaje mostrado dentro de la alerta */
  message: string;
}

/** Datos de identidad de un usuario. */
export interface UserInfoData {
  /** Iniciales mostradas en el avatar */
  initials: string;
  /** Nombre completo del usuario */
  name: string;
  /** Rol o cargo del usuario */
  role: string;
  /** Color de fondo del avatar (opcional) */
  avatarColor?: Themes;
}