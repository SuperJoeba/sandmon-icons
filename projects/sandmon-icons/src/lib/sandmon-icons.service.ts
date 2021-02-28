import { Injectable } from '@angular/core';
import {SandmonIcon} from './sandmon-icons';

@Injectable({
  providedIn: 'root'
})
export class SandmonIconsService {

  private registry = new Map<string, string>();

  public registerIcons(icons: SandmonIcon[]): void {
    icons.forEach((icon: SandmonIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`we could not find the sandmonIcon width the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
