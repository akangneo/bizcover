import styles from './LoadingIndicator.module.scss';
import React from 'react';
import classNames from 'classnames';
import { Loader, Dimmer } from 'semantic-ui-react';

interface IProps {
  readonly isActive?: boolean;
  readonly className?: string;
}

const LoadingIndicator: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { isActive = false } = props; // defaultProps example
  const { className, children } = props;

  const cssClasses: string = classNames(className, {
    [styles.wrapper]: isActive,
  });

  return (
    <div className={cssClasses}>
      {isActive && (
        <Dimmer active={isActive} inverted>
          <Loader inverted content="Loading..." size="huge" />
        </Dimmer>
      )}
      {children}
    </div>
  );
};

export default LoadingIndicator;
