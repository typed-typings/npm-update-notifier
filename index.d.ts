/**
 * Checks if there is an available update. Accepts settings defined below. Returns an object with update info if there is an available update, otherwise undefined.
 */
declare function updateNotifier (options: updateNotifier.Options): updateNotifier.Result;

declare namespace updateNotifier {
  interface Options {
    pkg: {
      name: string;
      version: string;
    }
    /**
     * How often to check for updates. (default: 1000 * 60 * 60 * 24 = 1 day).
     */
    updateCheckInterval?: number;
    /**
     * Passing a callback here will make it check for an update directly and report right away. Not recommended as you won't get the benefits explained in "How".
     */
    callback?: (error: Error, update: UpdateInfo) => any;
  }

  interface NotifyOptions {
    /**
     * Defer showing the notification to after the process has exited.
     */
    defer?: boolean;
    /**
    * Message that will be shown when an update is available.
    */
    message?: string;
    /**
    * Include the -g argument in the default message's npm i recommendation. 
    * You may want to change this if your CLI package can be installed as a 
    * dependency of another project, and don't want to recommend a global installation. 
    * This option is ignored if you supply your own message (see above).
    */
    isGlobal?: boolean;
    /**
    * Options object that will be passed to boxen. (https://github.com/sindresorhus/boxen)
    */
    boxenOpts?: {padding?: number, margin?: number, align?: string, borderColor?: string, borderStyle?: string};
  }

  interface Result {
    /**
     * Convenience method to display a notification message.
     * Only notifies if there is an update and the process is TTY.
     */
    notify (options?: NotifyOptions): void;
    update: UpdateInfo;
  }

  interface UpdateInfo {
    latest: string;
    current: string;
    type: string;
    date: string;
    name: string;
  }
}

export = updateNotifier;
